import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Field, Form } from "houseform";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Form onSubmit={(values) => alert(JSON.stringify(values))}>
      {({ submit }) => (
        <div>
          <Field name="username" initialValue={""}>
            {({ value, setValue, onBlur }) => (
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
              />
            )}
          </Field>
          <button onClick={submit}>Submit</button>
        </div>
      )}
    </Form>
  );
}
