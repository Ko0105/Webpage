//  * v0 by Vercel.
//  * @see https://v0.dev/t/1fvFzyMTtOO
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MyEducation() {
  return (
    <main className="flex-1 container py-12 space-y-12 px-4 md:px-6">
      <div className="px-4 py-6 md:py-12 lg:py-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Journal Papers</h1>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">

           <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Using partial discharge data to identify highly sensitive electrochemical parameters of aged lithium-ion batteries
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Energy Storage Materials, 2024</span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                This research develops a deep-learning model for parameter identification, 
                which can successfully estimate highly sensitive electrochemical parameters using only a portion of discharge data.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.ensm.2024.103665">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>

           <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Influence of concentration-dependent diffusivity on lithium plating: Polarization, 
                stability, and dendrite formation in phase-field simulations
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Journal of Energy Storage, 2024</span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                The results of this study provide valuable insights for resolving the observed discrepancies 
                in the onset of lithium dendrite formation between experiments and the classical Sand’s formula.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.est.2024.112615">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>
          
          <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Using tens of seconds of relaxation voltage to estimate open
                circuit voltage and state of health of lithium ion batteries
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Applied Energy, 2024</span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                This paper investigates the estimation of battery Open-Circuit
                Voltage (OCV) and State of Health (SOH) using partial relaxation
                voltages.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.apenergy.2023.122488">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>
          
          <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Constructing battery impedance spectroscopy using partial
                current in constant-voltage charging or partial relaxation
                voltage
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Applied Energy, 2024</span>
                {/* <span>•</span> */}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                This paper explores the use of partial relaxation voltage or
                constant voltage charging current to estimate the
                electrochemical impedance spectra(EIS) of steady states.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.apenergy.2023.122454">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>

          <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Differential current in constant-voltage charging mode: A novel
                tool for state-of-health and state-of-charge estimation of
                lithium-ion batteries
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Energy, 2024</span>
                {/* <span>•</span> */}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                This paper investigates estimating the charging and health
                status of batteries using the current curve differentials during
                constant-voltage charging stages.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.energy.2023.129826 ">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>

          <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Influence of inhomogeneity of lithium-ion transport within the
                anode/electrolyte interface on mossy lithium formation
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Journal of Power Sources, 2023</span>
                {/* <span>•</span> */}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                This paper employs phase-field method to investigate the
                instability analysis of lithium metal battery interfaces and
                conducts numerical computations using CUDA.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.jpowsour.2023.232779">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>

          <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Estimation of battery temperature during drive cycle operation 
              by the time evolution of voltage and current. Journal of Energy Storage
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Journal of Energy Storage, 2024</span>
                {/* <span>•</span> */}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                This paper employs Equivalent Circuit Model (ECM) parameters combined with a deep learning model 
              to estimate the surface temperature of lithium-ion batteries under dynamic current conditions.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.est.2024.112075">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>

          <div className="grid items-start gap-4 py-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Precise prediction of open circuit voltage of lithium ion
                batteries in a short time period
              </h2>
              <p className="text-gray-500 grid gap-1.5 items-center text-lg dark:text-gray-400">
                <span>Journal of Power Sources, 2023</span>
                {/* <span>•</span> */}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                The paper adopts an Equivalent Circuit Model (ECM) to construct
                the relaxation voltage curve for estimating the open-circuit
                voltage (OCV) of the battery.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="https://doi.org/10.1016/j.jpowsour.2022.232295">
                <Button type="submit">Read more</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
