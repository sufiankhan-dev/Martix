import Link from "next/link";
import Image from "next/image";

export default function CategoriesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Shop by Category
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Browse our curated collection of products across various
              categories.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <Link href="#" className="group relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Women's Fashion"
              className="aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white font-medium text-lg">Women</h3>
            </div>
          </Link>
          <Link href="#" className="group relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Men's Fashion"
              className="aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white font-medium text-lg">Men</h3>
            </div>
          </Link>
          <Link href="#" className="group relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Accessories"
              className="aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white font-medium text-lg">Accessories</h3>
            </div>
          </Link>
          <Link href="#" className="group relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Footwear"
              className="aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white font-medium text-lg">Footwear</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
