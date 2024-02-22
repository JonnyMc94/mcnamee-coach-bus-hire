import { Metadata } from 'next';
import Card from "@/src/ui/card"
 
export const metadata: Metadata = {
  title: 'Services',
};
 
export default function Services() {
  return (
    <main className="">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 m-10 justify-items-center">
        <Card/>
      </div>
    </main>
  );
}