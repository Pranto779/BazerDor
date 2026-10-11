import { Suspense } from "react";
import SignInForm from "../../components/SignIn";

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}