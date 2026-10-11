import { headers } from "next/headers";
import { redirect } from "next/navigation";

import ProfileForm from "../../../components/ProfileForm";
import { auth } from "@/lib/auth";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin?redirect=/profile/update&reason=login");

  return <ProfileForm currentName={session.user.name} />;
}