import { Inter } from "next/font/google";
import { Field, Form } from "houseform";
import { z } from "zod";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Form onSubmit={(values) => alert(JSON.stringify(values))}>
      {({ isValid, submit, errors }) => (
        <div>
          <Field
            name="username"
            initialValue={""}
            onSubmitValidate={z.literal("hello")}
          >
            {({ value, setValue, onBlur }) => (
              <>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={onBlur}
                />
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </>
            )}
          </Field>
          <button disabled={!isValid} onClick={submit}>
            Submit
          </button>
        </div>
      )}
    </Form>
  );
}
