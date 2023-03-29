import { Inter } from "next/font/google";
import { Field, Form } from "houseform";
import { z } from "zod";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Form
      onSubmit={(values) => {
        alert("Form was submitted with: " + JSON.stringify(values));
      }}
    >
      {({ isValid, isSubmitted, submit, errors }) => (
        <div>
          <Field
            name="username"
            initialValue=""
            onChangeValidate={z.literal("hello")}
            onSubmitValidate={z.literal("hello")}
          >
            {({ value, setValue, onBlur }) => {
              return (
                <div>
                  <input
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={"expects: hello"}
                  />

                  {isSubmitted &&
                    errors.map((error) => <p key={error}>{error}</p>)}
                </div>
              );
            }}
          </Field>
          <button disabled={isSubmitted && !isValid} onClick={submit}>
            Submit
          </button>
        </div>
      )}
    </Form>
  );
}
