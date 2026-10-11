
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ProfileForm from "@/components/ProfileForm";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin?redirect=/profile/update&reason=login");
  }

  return (
    <div className="min-h-screen bg-[#f6f8f4] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            আমার প্রোফাইল
          </h1>

          <p className="mt-2 text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Card */}
        <div className="mb-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-600 text-3xl font-bold text-white">
                {session.user.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {session.user.name}
                </h2>

                <p className="text-gray-500">{session.user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-6 text-xl font-bold text-gray-900">
            তথ্য আপডেট করুন
          </h3>

          <ProfileForm currentName={session.user.name} />
        </div>
      </div>
    </div>
  );
}

