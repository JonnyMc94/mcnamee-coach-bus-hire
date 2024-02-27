import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About',
};
 
export default function AboutPage() {
  return (
    <main className="flex items-center justify-center md:h-svh">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        About
      </div>
    </main>
  );
}