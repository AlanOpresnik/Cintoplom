import { CheckCircle } from "lucide-react";
import React from "react";

export default function TecnicalDetails() {
  return (
    <div className="mt-12 bg-white mx-4 md:mx-24 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <CheckCircle className="w-7 h-7 text-primary" />
        Especificaciones Técnicas
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold text-gray-700">Rendimiento:</span>
          <span className="text-gray-900">12-14 m²/litro</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold text-gray-700">Secado:</span>
          <span className="text-gray-900">2-4 horas</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold text-gray-700">Acabado:</span>
          <span className="text-gray-900">Mate Sedoso</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold text-gray-700">Aplicación:</span>
          <span className="text-gray-900">Pincel, Rodillo</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold text-gray-700">Base:</span>
          <span className="text-gray-900">Acrílica al agua</span>
        </div>
       
      </div>
    </div>
  );
}
