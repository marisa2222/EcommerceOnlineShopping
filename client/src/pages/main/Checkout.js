import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import LazyLoadingImage from "../../components/LazyLoadingImage";
import NumberInput from "../../components/NumberInput";

export default function Checkout() {
  const getIamgeUrl = (imgName) => "/assets/checkout/" + imgName;

  const [cardNumber, setCardNumber] = useState("");
  const [cardIcon, setCardIcon] = useState(getIamgeUrl("unknown.png"));

  const {
    auth: {
      user: { name, email, phone, address, cart },
    },
  } = useSelector((state) => state);
  const { register } = useForm({
    defaultValues: {
      name,
      email,
      phone,
      address,
      cardHolder:name
    },
  });

  // find subtotal from cart
  let subtotal = 0;
  cart?.forEach((item) => {
    subtotal += item?.product?.price * item?.quantity;
  });

  const getCardType = (cardNumber) => {
    var visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var mastercardRegEx = /^5[1-5][0-9]{14}$/;
    var amexRegEx = /^3[47][0-9]{13}$/;
    var discoverRegEx = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    if (visaRegEx.test(cardNumber)) {
      return "Visa";
    } else if (mastercardRegEx.test(cardNumber)) {
      return "Mastercard";
    } else if (amexRegEx.test(cardNumber)) {
      return "American Express";
    } else if (discoverRegEx.test(cardNumber)) {
      return "Discover";
    } else {
      return "Unknown";
    }
  };

  const detectCardType = (cardNumber) => {
    setCardNumber(cardNumber);

    var cardType = getCardType(cardNumber);

    if (cardType === "Visa") {
      setCardIcon(getIamgeUrl("visa.png"));
    } else if (cardType === "Mastercard") {
      setCardIcon(getIamgeUrl("mastercard.png"));
    } else if (cardType === "American Express") {
      setCardIcon(getIamgeUrl("amex.png"));
    } else {
      setCardIcon(getIamgeUrl("unknown.png"));
    }
  };

  return (
    <div className="grid grid-cols-12 gap-12 rounded-md">
      <div className="col-start-2 col-span-6 rounded-md border-1 bg-white p-4">
        <div className="grid grid-rows-6 rounded-md">
          <div className="">
            <h3 className="text-xl font-semibold py-4 border-b-2">
              Shipping details
            </h3>
          </div>

          <div className="row-span-5">
            <form className="flex-grow mt-10 md:mt-0 md:pr-16 max-w-3xl space-y-6">
              {/* full name */}
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Full name
                </label>
                <input
                  {...register("name", { required: false })}
                  name="name"
                  type="text"
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                />
              </div>

              {/* email */}
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Email
                </label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-4 rounded-l-2xl border border-r-0 border-neutral-200 bg-neutral-50 text-neutral-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope-at h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg>
                  </span>
                  <input
                    {...register("email", { required: false })}
                    name="email"
                    type="text"
                    className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  />
                </div>
              </div>

              {/* phone number */}
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Phone number
                </label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-4 rounded-l-2xl border border-r-0 border-neutral-200 bg-neutral-50 text-neutral-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-phone h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </span>
                  <input
                    {...register("phone", { required: false })}
                    name="phone"
                    type="text"
                    className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  />
                </div>
              </div>

              {/* address */}
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Address
                </label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-4 rounded-l-2xl border border-r-0 border-neutral-200 bg-neutral-50 text-neutral-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                      />
                    </svg>
                  </span>
                  <input
                    {...register("address", { required: false })}
                    name="address"
                    type="text"
                    className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="py-8">
            <h3 className="text-xl font-semibold py-4 border-b-2">Payment</h3>
          </div>

          <div className="overflow-hidden px-4 gap-3 rounded-2xl w-full grid grid-rows-5 grid-cols-3 bg-gradient-to-r from-sky-500 to-indigo-500"
            
            >
            <div className="py-4">
              <h3 className="text-xl font-semibold">Credit Card</h3>
            </div>
            {/* Card Number */}
            <div className="row-start-2 col-span-3 ">
              <label
                className="nc-Label text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                Card Number
              </label>
              <NumberInput
                {...register("cardNumber", { required: true })}
                name="cardNumber"
                type="text"
                value={cardNumber}
                onChange={detectCardType}
                className="block w-full form-input rounded-md"
              />
            </div>

            {/* Card holder name */}
            <div className="row-start-3 col-span-3 ">
              <label
                className="nc-Label text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                Holder's Name
              </label>
              <input
                {...register("cardHolder", { required: true })}
                name="cardHolder"
                type="text"
                className="block w-full form-input rounded-md"
              />
            </div>

            {/* expire date */}
            <div className="row-start-4 col-span-2 ">
              <label
                className="nc-Label text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                Expiration
              </label>
              <div className="grid grid-cols-12">
                <div className="col-span-3">
                  <label className="nc-Label text-xs" data-nc-id="Label">
                    Month (MM)
                  </label>
                  <input
                    {...register("expMonth", { required: true })}
                    name="expMonth"
                    type="text"
                    placeholder="00"
                    className="block w-10/12 form-input rounded-md"
                  />
                </div>
                <div className="col-span-4">
                  <label className="nc-Label text-xs" data-nc-id="Label">
                    Year (YYYY)
                  </label>
                  <input
                    {...register("expYear", { required: true })}
                    name="expYear"
                    type="text"
                    placeholder="0000"
                    className="block w-full form-input rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* cvv  */}
            <div className="row-start-5 ">
              <label
                className="nc-Label text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                CVV
              </label>
              <input
                {...register("expYear", { required: true })}
                name="expYear"
                type="text"
                placeholder="000"
                className="block w-4/12 form-input rounded-md"
              />
            </div>

            <div className="relative row-start-5 px-4 col-start-3">
              <LazyLoadingImage
                src={cardIcon}
                className=" absolute -top-5 right-0"
                width="120"
                height="160"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md col-span-4 border-1 bg-white p-4">
        <div className="grid grid-rows-6 rounded-md ">
          <div className="">
            <h3 className="text-xl font-semibold py-4 border-b-2">Summary</h3>
          </div>
          <div className="row-span-5">
            {cart?.map((crt) => (
              <div key={crt?._id} className="flex py-5 last:pb-0">
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-base font-medium">
                          {crt?.product?.title}
                        </h3>
                      </div>
                      <div className="mt-0.5">
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">
                            €{crt?.product?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {crt?.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-neutral-50 p-5">
              <p className="flex justify-between font-semibold text-slate-900">
                <span>
                  <span>Subtotal</span>
                  <span className="block text-sm text-slate-500 font-normal">
                    Shipping and taxes calculated at checkout.
                  </span>
                </span>
                <span className="">€{subtotal}.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
