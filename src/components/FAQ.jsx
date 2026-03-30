import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What is crypto?",
    answer: (
      <>
        Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a <a href="#" className="text-[#1199FA] hover:underline">blockchain</a> and uses <a href="#" className="text-[#1199FA] hover:underline">cryptography</a> for security. It is decentralized and operates independently of a central bank.<br/><br/>
        Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include <a href="#" className="text-[#1199FA] hover:underline">Bitcoin</a>, <a href="#" className="text-[#1199FA] hover:underline">Ethereum</a>, <a href="#" className="text-[#1199FA] hover:underline">Litecoin</a>, <a href="#" className="text-[#1199FA] hover:underline">Ripple</a>, and <a href="#" className="text-[#1199FA] hover:underline">Cronos</a>.<br/>
        Many cryptocurrencies, like Bitcoin, are created through a process called <a href="#" className="text-[#1199FA] hover:underline">mining</a>, which involves solving complex mathematical equations to validate and record transactions on a blockchain. This mechanism is also called <a href="#" className="text-[#1199FA] hover:underline">Proof of Work (PoW)</a>. Another consensus mechanism that has increased in popularity — as it is more energy efficient — is <a href="#" className="text-[#1199FA] hover:underline">Proof of Stake (PoS)</a>. Instead of mining, PoS relies on network participants validating transactions. Ethereum, the second-largest cryptocurrency, uses this consensus mechanism.
      </>
    )
  },
  {
    question: "Where to buy crypto?",
    answer: (
      <>
        There are several ways to buy cryptocurrencies, including:<br/><br/>
        <strong>Brokerage services:</strong> Crypto brokers allow users to simply buy and sell cryptocurrencies. A popular example is the Crypto.com App, trusted by over 150 million users. It is available at the Apple Store and on Google Play.<br/><br/>
        <strong>Cryptocurrency exchanges:</strong> These are online platforms where users can buy, sell, and trade cryptocurrencies using fiat currency or other cryptocurrencies. They offer more complex functions compared to a crypto brokerage, adding trading instruments like crypto derivatives. The Crypto.com Exchange is an example of a popular crypto exchange.<br/><br/>
        <strong>Peer-to-peer (P2P) marketplaces:</strong> These are platforms where buyers and sellers can directly trade cryptocurrencies without the involvement of a third-party exchange. This is also known as DeFi, short for decentralized finance. Multiple P2P crypto marketplaces can be accessed all in one app via the Crypto.com Onchain.<br/><br/>
        It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com Onchain.
      </>
    )
  },
  {
    question: "How to buy crypto?",
    answer: (
      <>
        To buy crypto, follow these general steps:<br/><br/>
        Choose a crypto platform to use, like the Crypto.com Exchange or Crypto.com App.<br/><br/>
        Create an account on the chosen platform by providing personal information and ID verification, also known as ‘Know Your Customer’ (KYC) procedures.<br/><br/>
        Deposit fiat currency or another cryptocurrency into the newly created account. The Crypto.com App supports bank transfers, credit cards, debit cards, and cryptocurrency transfers to buy crypto, depending on region.<br/><br/>
        Navigate to the ‘Buy’ section of the Crypto.com Exchange or App and select the crypto to buy.<br/><br/>
        Enter the amount of cryptocurrency to buy and confirm the transaction.<br/><br/>
        The crypto will be deposited into the account. From here, it can be transferred to other crypto wallets or converted back to fiat currency and paid out to a bank account.<br/><br/>
        It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com Onchain.
      </>
    )
  },
  {
    question: "How to trade crypto?",
    answer: (
      <>
        To trade cryptocurrency, follow these general steps:<br/><br/>
        Choose a cryptocurrency exchange that supports trading. A popular option is the Crypto.com Exchange.<br/><br/>
        Create an account on the chosen platform and perform ID verification, known as KYC (‘Know Your Customer’).<br/><br/>
        Deposit funds into the newly created account using a supported payment method. The Crypto.com Exchange supports bank transfers and credit/debit cards.<br/><br/>
        Navigate to the trading section of the platform and select the cryptocurrency pair to trade.<br/><br/>
        Choose whether to buy or sell the cryptocurrency, and enter the amount to trade.<br/><br/>
        Set the preferred price and order type. There are several types of orders, including market orders, limit orders, stop orders, and crypto options, which allow users to buy or sell at a specific price or under certain conditions.<br/><br/>
        Submit the trade order and wait for it to be executed. Depending on market conditions, the trade may be filled immediately, or it may take time to be filled.<br/><br/>
        Monitor trades and adjust strategies as necessary.<br/><br/>
        Here is an introduction to trading on the Crypto.com Exchange.<br/><br/>
        It is crucial to note that trading cryptocurrency carries risk, and it is important to trade only what you can afford to lose.
      </>
    )
  },
  {
    question: "How to earn crypto?",
    answer: (
      <>
        There are several ways to earn cryptocurrency, including:<br/><br/>
        <strong>Mining:</strong> Cryptocurrency mining involves using specialized computer hardware to solve complex mathematical equations that validate transactions on a blockchain network. Successful miners are rewarded with newly minted cryptocurrency for their efforts.<br/><br/>
        <strong>Staking/Lockups:</strong> Staking and lockups involve holding or locking up a certain amount of cryptocurrency in a wallet or on a platform to support the operations of the blockchain network. Stakers are rewarded with new cryptocurrency as a form of interest for their support.<br/><br/>
        <strong>Trading:</strong> Trading cryptocurrency involves buying and selling cryptocurrencies on exchanges or other trading platforms. Those who have a good understanding of market trends and are able to make informed trading decisions can earn profits through trading.<br/><br/>
        <strong>Airdrops:</strong> Airdrops are free distributions of cryptocurrency to users who meet certain criteria or participate in promotional activities.<br/><br/>
        <strong>Crypto Projects:</strong> Some blockchain projects offer rewards or bounties for users who contribute to their development or community. This can include activities like bug bounties, testing, or content creation.<br/><br/>
        It's important to note that each method of earning cryptocurrency carries its own risks and rewards. It is recommended to carefully research cryptocurrencies and understand the process before buying. Learn more about the crypto market at Crypto.com University.
      </>
    )
  },
  {
    question: "How to earn rewards on crypto?",
    answer: (
      <>
        Users can earn rewards on their cryptocurrency holdings through various products that offer rewards-bearing accounts or lending services. Here are some ways to earn rewards on cryptocurrency:<br/><br/>
        The Crypto.com App, Exchange, and Crypto.com Onchain all offer different ways to earn rewards on crypto, called Crypto Earn.<br/><br/>
        Create an account on the chosen platform and deposit cryptocurrency holdings into the rewards account.<br/><br/>
        Depending on the platform, users may earn rewards through lending their cryptocurrency to other users or by locking up their cryptocurrency for a period of time.<br/><br/>
        Some products offer fixed reward rates (e.g., the Crypto.com Visa Card), while others may offer variable rates that depend on market conditions (e.g., the 'Earn' feature in the Crypto.com Onchain).<br/><br/>
        Monitor rewards and adjust strategies as necessary.<br/><br/>
        It's important to note that earning interest and rewards on cryptocurrency carries risks, including fluctuations in market conditions that may affect interest rates. Make sure to carefully research and understand terms and conditions before depositing cryptocurrency.
      </>
    )
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 lg:py-24" style={{ background: "#080D1B" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold text-white font-outfit mb-10">
          FAQ
        </h2>

        <div className="w-full flex-grow flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            // The first item doesn't have a top border on crypto.com usually, but let's just use border-b
            // Actually, crypto.com FAQ questions have a border-b on all items except maybe the last.
            // Oh wait, looking at the image provided, there are borders between all items.
            return (
              <div 
                key={index}
                className="border-b border-white/10"
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="text-[20px] font-bold text-white font-outfit transition-colors">
                    {faq.question}
                  </span>
                  <div className="text-gray-400">
                    {isOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-[#c9cfdd] font-normal text-[15px] leading-relaxed font-outfit pr-4 lg:pr-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <div className="pt-8 text-white font-outfit font-bold text-[17px] md:text-lg">
            Have more questions? <a href="#" className="text-[#1199FA] hover:text-[#0088EE] transition-colors ml-1">Contact Us</a>
          </div>
        </div>

        {/* Bottom Disclaimer & Logos */}
        <div className="w-full mt-24 pt-12 border-t border-white/5 flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            {/* Left text */}
            <div className="text-[#8e95a5] text-[13px] leading-relaxed max-w-[800px] flex flex-col gap-5 font-sans">
              <p>
                The purpose of this website is solely to display information regarding the products and services available on the Crypto.com App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the Crypto.com App.
              </p>
              <p>
                Please note that the availability of the products and services on the Crypto.com App is subject to jurisdictional limitations. Crypto.com may not offer certain products, features and/or services on the Crypto.com App in certain jurisdictions due to potential or actual regulatory restrictions.
              </p>
            </div>

            {/* Right Logos */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 opacity-80">
              <img src="/14.svg" alt="AICPA SOC" className="h-10 lg:h-12 w-auto object-contain" />
              <img src="/15.svg" alt="SGS" className="h-10 lg:h-12 w-auto object-contain" />
              <img src="/16.svg" alt="SGS" className="h-10 lg:h-12 w-auto object-contain" />
              <img src="/17.svg" alt="PCI DSS" className="h-10 lg:h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Bottom Row: Logo & Language */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5L12 2ZM12 4.5L5 8.5V15.5L12 19.5L19 15.5V8.5L12 4.5Z" />
                <path d="M12 8.5L16 11V14L12 16.5L8 14V11L12 8.5H12Z" />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-white mb-0.5 font-sans">crypto.com</span>
            </div>

            {/* Language / Region */}
            <div className="flex items-center gap-2 text-white/80 font-bold text-sm font-sans tracking-wide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>English</span>
              <span className="text-white/20 px-1 font-normal">|</span>
              <span>USD</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
