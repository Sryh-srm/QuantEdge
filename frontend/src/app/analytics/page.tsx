"use client";

import {
  TrendingUp,
  Activity,
  Brain,
  Shield,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      {/* Top KPI Row */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-green-500/40 transition-all">
          <div className="flex justify-between items-center mb-4">
            <p className="text-zinc-400">
              Market Trend
            </p>

            <TrendingUp className="text-green-400" />
          </div>

          <h2 className="text-3xl font-bold text-green-400">
            Bullish
          </h2>

          <p className="text-zinc-500 mt-2">
            Strong Uptrend
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-yellow-500/40 transition-all">
          <div className="flex justify-between items-center mb-4">
            <p className="text-zinc-400">
              Volatility
            </p>

            <Activity className="text-yellow-400" />
          </div>

          <h2 className="text-3xl font-bold text-yellow-400">
            18.4%
          </h2>

          <p className="text-zinc-500 mt-2">
            Moderate Volatility
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all">
          <div className="flex justify-between items-center mb-4">
            <p className="text-zinc-400">
              Confidence
            </p>

            <Brain className="text-blue-400" />
          </div>

          <h2 className="text-3xl font-bold text-blue-400">
            82%
          </h2>

          <p className="text-zinc-500 mt-2">
            High Confidence
          </p>
        </div>
      </div>

      {/* Forecast + Risk */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Forecast */}
        <div className="col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Brain
              className="text-blue-400"
              size={28}
            />

            <h2 className="text-2xl font-semibold">
              AI Forecast
            </h2>
          </div>

<div className="grid grid-cols-3 gap-6">
  <div>
    <p className="text-zinc-400 mb-2">
      Expected Return
    </p>

    <h3 className="text-6xl font-bold text-green-400">
      +4.2%
    </h3>
  </div>

  <div>
    <p className="text-zinc-400 mb-2">
      Forecast Horizon
    </p>

    <h3 className="text-4xl font-bold">
      7 Days
    </h3>
  </div>

  <div>
    <p className="text-zinc-400 mb-2">
      Confidence
    </p>

    <h3 className="text-4xl font-bold text-blue-400">
      82%
    </h3>
  </div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-800">
  <p className="text-zinc-400 text-sm">
    Model Outlook
  </p>

  <p className="text-green-400 font-medium mt-2">
    Bullish bias maintained with moderate volatility.
  </p>
</div>
        </div>

        {/* Risk */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Risk Score
            </h2>

            <Shield className="text-yellow-400" />
          </div>

          <h3 className="text-7xl font-bold text-yellow-400 mb-4">
            6.8
          </h3>

          <p className="text-zinc-400">
            out of 10
          </p>

          <div className="mt-6">
            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400"
                style={{ width: "68%" }}
              />
            </div>

            <p className="mt-3 text-yellow-400">
              Moderate Risk
            </p>
          </div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-6">
          AI Market Insight
        </h2>

        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            • BTC remains in a bullish
            trend with strengthening
            momentum.
          </p>

          <p>
            • Market volatility remains
            moderate and manageable.
          </p>

          <p>
            • Forecast models predict
            approximately 4.2% upside over
            the next 7 days.
          </p>

          <p>
            • Confidence remains high at
            82%, supporting the current
            outlook.
          </p>

          <div className="pt-4 border-t border-zinc-800">
            <p className="font-semibold text-white">
              Recommendation
            </p>

            <p className="mt-2">
              Monitor resistance near
              $110,000 and watch for
              volatility expansion before
              increasing exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}