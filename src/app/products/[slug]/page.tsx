import { Droplet, Shield, Clock, Palette } from "lucide-react";
import ImageSide from "./components/ImageSide/ImageSide";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import { products } from "../../../lib/product-data-mock";
import TecnicalDetails from "./components/TecnicalDetails/TecnicalDetails";
import { Metadata } from "next";


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Cintoplom",
      description: "El producto que buscas no existe.",
    };
  }

  return {
    title: `${product.name} | Cintoplom`,
    description: product.label ?? "Producto de alta calidad Cintoplom.",
    openGraph: {
      title: `${product.name} | Cintoplom`,
      description: product.label ?? "Producto de alta calidad.",
      images: product.img ? [product.img] : [],
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  console.log(product);
  

  const features = [
    { icon: Droplet, title: "Secado Rápido", desc: "2-4 horas entre manos" },
    { icon: Shield, title: "Anti-Humedad", desc: "Protección duradera" },
    { icon: Clock, title: "Larga Duración", desc: "Hasta 10 años" },
    { icon: Palette, title: "+500 Colores", desc: "Personalizable" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Main Content */}
      <div className="px-4 md:px-24 mx-auto  py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <ImageSide product={product} />

          {/* Product Info */}
          <div>
            <ProductInfo product={product} />

            {/* Action Buttons */}
            <ActionButtons />
          </div>
        </div>
      </div>
      {/* Technical Details */}
      <TecnicalDetails />
      {/* Features Grid */}
      <div className="mt-16 px-4 md:px-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-t-4 border-primary"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-red-900" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
