import imageSwap from "@/images/swap.png";
import Image from "next/image";
import Button from "@/components/Button";

export default function CurrencySwap({ sell = false, onContinue }) {
  return (
    <div className="bg-tertiary p-4 rounded-4">
      {!sell ? (
        <>
          <h3>Select Currency</h3>
          <p className="small">Reference Price: 1,450,939,280.43 VND/BTC</p>
        </>
      ) : (
        <h3>Confirm Information</h3>
      )}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <p className="small text-black fw-semibold">Pay</p>
          <div className="input-group input-group-lg">
            <input
              type="text"
              placeholder="0.00"
              className="form-control fw-semibold"
            />
            <select className="form-select" defaultValue="2">
              <option value="1">VND</option>
              <option value="2">USDT</option>
              <option value="3">THREE</option>
            </select>
          </div>
        </div>
        <div>
          <Image
            src={imageSwap}
            alt="Swap"
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          <p className="small text-black fw-semibold">Receive</p>
          <div className="input-group input-group-lg">
            <input
              type="text"
              placeholder="0.00"
              className="form-control fw-semibold"
            />
            <select className="form-select" defaultValue="2">
              <option value="1">VND</option>
              <option value="2">USDT</option>
              <option value="3">THREE</option>
            </select>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Button className="px-5 py-2" onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
