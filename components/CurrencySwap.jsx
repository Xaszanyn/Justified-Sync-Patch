import imageSwap from "@/images/swap.png";
import Image from "next/image";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function CurrencySwap({ sell = false, symbol, onContinue }) {
  const [receive, setReceive] = useState(0);
  const [value, setValue] = useState(1);
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (!symbol) return;

    fetch(`/api/currency?symbol=${symbol}`)
      .then((response) => response.json())
      .then((response) => setRatio(response.data[symbol].quote.USDT.price));
  }, [symbol]);

  useEffect(() => {
    setReceive(value * ratio);
  }, [value, ratio]);

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
              type="number"
              placeholder="0.00"
              defaultValue={1}
              onChange={(event) => setValue(event.target.value)}
              className="form-control fw-semibold"
              min={0}
            />
            <select className="form-select" defaultValue="symbol">
              <option value="symbol">{symbol}</option>
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
              readOnly
              value={receive}
              className="form-control fw-semibold"
            />
            <select className="form-select" defaultValue="USDT">
              <option value="USDT">USDT</option>
            </select>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Button className="px-5 py-2" onClick={() => onContinue(value)}>
          Continue
        </Button>
      </div>
    </div>
  );
}
