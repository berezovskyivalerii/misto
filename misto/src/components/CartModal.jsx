export default function CartModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="h-[444px] lg:h-[660px] relative bg-white rounded-[30px] shadow-2xl max-w-[1200px] w-full max-h-[90vh] overflow-auto p-6 lg:p-10">
                {/* Кнопка закрытия */}
                <h2 className="text-[32px] lg:text-[44px] font-extrabold text-[#1E1E1E] mb-4">
                    Кошик
                </h2>
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-3xl font-bold text-gray-500 hover:text-black transition"
                >
                    <img src="./close.png" alt="Закрити" className="h-6 w-6" />
                </button>

                <div className="flex flex-col justify-center items-center gap-5">
                    <img src="./cat-cart.png" alt="cat" className="w-[204px] lg:w-[357px]" />
                    <h3 className="text-[22px] text-center lg:text-[30px] font-semibold">
                        У кошику ще порожньо
                    </h3>
                    <p className="text-lg lg:text-2xl">Але це лише початок!</p>
                </div>
            </div>
        </div>
    );
}
