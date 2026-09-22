import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../../data/merchandise';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [isOrdered, setIsOrdered] = useState<boolean>(false);
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');

  if (!product) return null;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  const handleClose = () => {
    setIsOrdered(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 text-slate-400 hover:text-slate-800 p-1.5 rounded-full bg-white/80 border border-slate-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image preview */}
        <div className="md:w-1/2 bg-slate-50 p-6 flex items-center justify-center relative min-h-[220px]">
          <span className="absolute top-3 left-3 bg-snaiperis-dark text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-52 object-contain"
          />
        </div>

        {/* Product details & order inquiry */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          {isOrdered ? (
            <div className="text-center py-6 my-auto">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Užsakymas priimtas!</h3>
              <p className="text-xs text-slate-600 mb-4">
                Prekė rezervuota: <strong>{product.name}</strong> ({selectedSize} dydis, {quantity} vnt.).
                Mūsų administratorė susisieks su Jumis dėl atsiėmimo treniruotėje.
              </p>
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-snaiperis-dark text-white text-xs font-bold rounded-xl"
              >
                Uždaryti
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 leading-snug">
                  {product.name}
                </h2>
                <div className="text-xl font-black text-snaiperis-red mt-1">
                  {product.price}
                </div>
              </div>

              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Dydis:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                          selectedSize === size
                            ? 'bg-snaiperis-red text-white border-snaiperis-red'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Order Reservation form */}
              <form onSubmit={handleOrder} className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Kiekis</label>
                    <select
                      value={quantity}
                      onChange={e => setQuantity(Number(e.target.value))}
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold"
                    >
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>{n} vnt.</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Telefonas *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+370 6..."
                      value={parentPhone}
                      onChange={e => setParentPhone(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Užsakovo vardas *</label>
                  <input
                    type="text"
                    required
                    placeholder="Vardas Pavardė"
                    value={parentName}
                    onChange={e => setParentName(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 mt-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Rezervuoti</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
