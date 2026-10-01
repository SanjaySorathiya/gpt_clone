import { SignIn } from "@clerk/nextjs"; // SignIn given by clerk

export default function Page() {
  return <SignIn forceRedirectUrl={"/"} />;
}
