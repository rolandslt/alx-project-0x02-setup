import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen space-y-4 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <Button label="Small Rounded" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Pill" size="large" shape="rounded-full" />
      </main>
    </>
  );
};

export default AboutPage;
