import React, { useState, useEffect, useRef } from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    setIsOrdered(false);
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  return (
    <div 
      className="registration-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        className="registration-dialog"
        style={{ maxWidth: '580px' }}
      >
        <button 
          ref={closeRef}
          onClick={onClose} 
          aria-label="Uždaryti" 
          className="icon-button registration-close"
        >
          <X size={21} />
        </button>

        <span className="eyebrow"><span className="status-dot" /> Oficiali atributika · {product.category}</span>

        {isOrdered ? (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}><span className="status-dot" /> Užsakymas priimtas</span>
            <h2 style={{ fontSize: '26px', marginTop: '12px' }}>Prekė sėkmingai rezervuota!</h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8', maxWidth: '440px', margin: '12px auto 24px' }}>
              Rezervuota: <strong style={{ color: 'var(--ink)' }}>{product.name}</strong> ({selectedSize} dydis, {quantity} vnt.).
              Akademijos administracija susisieks su Jumis dėl atsiėmimo treniruotėje.
            </p>
            <button
              onClick={onClose}
              className="button-primary"
              style={{ minHeight: '44px', padding: '12px 24px' }}
            >
              Uždaryti langą
            </button>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mt-4 pb-6 border-b border-[var(--line)]">
              {/* Image */}
              <div className="sm:col-span-5" style={{ background: '#eeefe8', borderRadius: '4px', padding: '16px', display: 'grid', placeItems: 'center', minHeight: '180px' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ maxHeight: '180px', objectFit: 'contain', mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Title & Price */}
              <div className="sm:col-span-7 flex flex-col justify-center">
                <h2 id="product-title" style={{ fontSize: '24px', margin: 0, lineHeight: 1.25 }}>
                  {product.name}
                </h2>
                <div style={{ fontSize: '26px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: 'var(--red)', marginTop: '8px' }}>
                  {product.price}
                </div>
                <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '8px', lineHeight: '1.6' }}>
                  Aukštos kokybės oficiali akademijos atributika. Galite atsiimti treniruočių salėje arba biure.
                </p>
              </div>
            </div>

            <form onSubmit={handleOrder} style={{ marginTop: '20px' }}>
              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '8px' }}>
                    Pasirinkite dydį:
                  </label>
                  <div className="filter-tabs" style={{ marginTop: 0 }}>
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className="filter-tab"
                        aria-pressed={selectedSize === size}
                        style={{ padding: '6px 14px', fontSize: '11px' }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Contacts */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                    Kiekis
                  </label>
                  <select
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '4px', padding: '10px 12px', fontSize: '13px', background: '#fff' }}
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n} vnt.</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                    Telefonas *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+370 6..."
                    value={parentPhone}
                    onChange={e => setParentPhone(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '4px', padding: '10px 12px', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                  Užsakovo vardas, pavardė *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Vardas Pavardė"
                  value={parentName}
                  onChange={e => setParentName(e.target.value)}
                  style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '4px', padding: '10px 12px', fontSize: '13px' }}
                />
              </div>

              <button
                type="submit"
                className="button-primary"
                style={{ width: '100%' }}
              >
                Pateikti rezervacijos užklausą <ArrowUpRight size={17} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
