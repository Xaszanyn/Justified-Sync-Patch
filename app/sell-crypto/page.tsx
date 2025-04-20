"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";

import imageSell from "@/images/sell.png";
import imageSell2 from "@/images/sell2.png";
import imageSell3 from "@/images/sell3.png";
import imageSell4 from "@/images/sell4.png";
import imageSell5 from "@/images/sell5.png";
import imageSell6 from "@/images/sell6.png";

import { useState } from "react";

import CurrencySwap from "@/components/CurrencySwap";

export default function Sell() {
  const router = useRouter();

  const [phase, setPhase] = useState(0);

  return (
    <main>
      <Breadcrumb title="Sell Crypto" />
      <Container className="bg-white dark-black py-5">
        <div className="row py-5">
          <div className="col-3 pe-5">
            <div className="mb-1">
              <Button variant="white">
                <span className="text-black fw-semibold">Overview</span>
              </Button>
            </div>
            <div className="mb-1">
              <Button
                variant="white"
                className="py-2 w-100 text-start"
                onClick={() => router.push("/buy-crypto")}
              >
                <span className="text-black fw-semibold">Buy Crypto</span>
              </Button>
            </div>
            <div>
              <Button
                className="py-2 w-100 text-start"
                onClick={() => router.push("/sell-crypto")}
              >
                <span className="fw-semibold">Sell Crypto</span>
              </Button>
            </div>
          </div>
          <div className="col-9 border-start border-terniary border-2 px-5">
            <div className="ps-5">
              <div className={`pb-3 mb-5 progress-${phase}`}>
                <div className="phase-0">
                  <Image
                    src={imageSell}
                    alt="Process"
                    width={990}
                    height={24}
                  />
                </div>
                <div className="phase-1">
                  <Image
                    src={imageSell2}
                    alt="Process"
                    width={988}
                    height={24}
                  />
                </div>
                <div className="phase-2">
                  <Image
                    src={imageSell3}
                    alt="Process"
                    width={989}
                    height={24}
                  />
                </div>
                <div className="phase-3">
                  <Image
                    src={imageSell4}
                    alt="Process"
                    width={990}
                    height={24}
                  />
                </div>
              </div>
              <div className={`progress-${phase}`}>
                <div className="phase-0">
                  <button onClick={() => setPhase(1)}>_PROCEED_</button>
                </div>
                <div className="phase-1">
                  <CurrencySwap sell onContinue={() => setPhase(2)} />
                </div>
                <div className="phase-2">
                  <Image
                    style={{ cursor: "pointer" }}
                    onClick={() => setPhase(3)}
                    src={imageSell5}
                    alt="Confirm"
                    width={989}
                    height={1072}
                  />
                </div>
                <div className="phase-3">
                  <Image
                    style={{ cursor: "pointer" }}
                    onClick={() => {}}
                    src={imageSell6}
                    alt="Complete"
                    width={990}
                    height={941}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}
