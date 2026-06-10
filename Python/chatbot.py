from transformers import pipeline

chatbot = pipeline("text-generation", model="microsoft/DialoGPT-medium")

while True:
    user = input("You: ")

    if user.lower() == "exit":
        break

    response = chatbot(
        user,
        max_new_tokens=50,
        num_return_sequences=1,
        return_full_text=False,
        pad_token_id=chatbot.tokenizer.eos_token_id
    )

    print("Bot: ", response[0]["generated_text"])