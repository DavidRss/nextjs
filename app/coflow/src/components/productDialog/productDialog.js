import { nFormatter } from "../../utils/utils";

export default function ProductDialog({
  product,
  open,
  hideDialog,
  variant,
  onChangedVariant,
  processPurchase,
}) {
  const handleConfirm = () => {
    const selVariant = product?.variants.find((item) => item.id === variant);
    if (selVariant) {
      processPurchase(selVariant);
    }
  };

  if (product === null) {
    return <></>;
  }

  return (
    <div
      className={`${open ? "" : "hidden"} relative z-[999]`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-dialog text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div>
              <div className="flex items-center sm:flex sm:items-center border-b-2 py-4 px-6 bg-dialog">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold text-white-90"
                    id="modal-title"
                  >
                    {product?.title}
                  </h3>
                </div>
              </div>
              <div className="flex text-white-90 min-h-[240px] p-4">
                <div className="w-80">
                  <figure>
                    {product?.images.length > 0 && (
                      <img src={product.images[0].src} alt="Shoes" />
                    )}
                  </figure>
                  <div className="py-4 px-5 xl:card-body">
                    <div
                      className="mt-3"
                      dangerouslySetInnerHTML={{
                        __html: product?.descriptionHtml,
                      }}
                    ></div>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex flex-col items-start">
                        <span className="text-white text-3xl font-extrabold">
                          {nFormatter(product?.variants[0].price.amount, 2)} €
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-control w-full max-w-xs ml-5">
                  <label className="label">
                    <span className="label-text">Choisis ta taille</span>
                  </label>
                  <label className="label">
                    <span className="label-text-alt">Taille</span>
                  </label>
                  <select
                    className="select select-bordered"
                    onChange={onChangedVariant}
                    value={variant}
                  >
                    {product?.variants.map((item, index) => (
                      <option value={item.id} key={`variant-option-${index}`}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary mt-8"
                    onClick={handleConfirm}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-navigate px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white-90 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 sm:mt-0 sm:w-auto"
                onClick={hideDialog}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
