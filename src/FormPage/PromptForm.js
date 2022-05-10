import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

export default function PromptForm({ prompts, setPrompts }) {
  useEffect(() => {
    if (prompts.length) {
      localStorage.setItem("responses", JSON.stringify(prompts));
    }
  }, [prompts]);

  const initialFormState = {
    prompt: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handlePromptInput = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handlePromptSubmission = (event) => {
    event.preventDefault();

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    //POST request to openai api.
    openai
      .createCompletion("text-curie-001", {
        prompt: formData.prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setPrompts([
          { prompt: formData.prompt, response: response.data.choices[0].text },
          ...prompts,
        ]);
      });
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handlePromptSubmission}>
      <div className="container">
        <label htmlFor="prompts" className="form-label">
          Enter Prompt:
        </label>
        <textarea
          id="prompts"
          name="prompt"
          className="form-control"
          value={formData.prompt}
          onChange={handlePromptInput}
          placeholder="Write lyrics in the style of..."
        />
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </div>
    </form>
  );
}
