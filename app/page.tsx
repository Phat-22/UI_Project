import Image from "next/image";
import Layout from "@/components/Layout";
import './page.css'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Layout>
        <section className="relative overflow-hidden object-cover font-primary">
          <Image
            src="/assets/images/Background Image.png"
            alt="bg-1"
            width={1440}
            height={800}
            className="absolute w-full object-cover"
          />

          <div className="relative h-full w-full px-1">
            <div className="absolute right-0 top-0 mt-[-2rem] h-full max-w-7xl translate-x-1 object-cover">
              <Image
                src="/assets/images/banner.png"
                alt="22"
                width={845}
                height={200}
                sizes="100vw"
                style={{ height: "auto" }}
              />
            </div>
            <div className="w-screen px-[120px] py-[147px] text-white">
              <div className="py-1 text-[22px] font-normal leading-[33px]">
                Welcome to DigiTrust
              </div>
              <div className="max-w-3xl py-4 text-[80px] font-extrabold leading-[80px]">
                Introducing Smart Vault Aggregator
              </div>
              <div className="max-w-md text-xl font-normal leading-[35px]">
                Your Gateway to Enhanced Investment in the Decentralized Finance
                Space.
              </div>
              <div className="flex items-center gap-x-3 py-11">
                <button className="rounded-[10px] bg-white px-6 py-4 text-base font-medium leading-[20px] text-blue-600">
                  Start Investing
                </button>
                <button className="rounded-[10px] border border-white px-6 py-4 text-base font-medium leading-[20px]">
                  Explore
                </button>
              </div>
              <div className="flex items-center gap-x-8 font-second">
                <div className="flex items-center gap-1 text-[17px] leading-[30px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9" cy="9" r="9" fill="#10B981" />
                    <path
                      d="M5 9L7.8 12L13 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Great Service
                </div>
                <div className="flex items-center gap-1 text-[17px] leading-[30px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9" cy="9" r="9" fill="#10B981" />
                    <path
                      d="M5 9L7.8 12L13 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Great Service
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto flex max-w-4xl scale-75 items-center justify-center gap-x-[50px] py-[70px] font-primary">
          <Image
            src="/assets/images/logo_aws.png"
            alt="aws"
            width={89}
            height={55}
          />
          <Image
            src="/assets/images/logo_Messari.png"
            alt="aws"
            width={272}
            height={36}
          />
          <Image
            src="/assets/images/logo_BlockPI.png"
            alt="aws"
            width={173}
            height={46}
          />
          <Image
            src="/assets/images/logo_Coinmarketcap.png"
            alt="aws"
            width={207}
            height={60}
          />
        </section>
        <section className="relative overflow-hidden object-cover font-primary">
          <div className="relative text-center text-[50px] font-bold leading-[65px]">
            AI-Driven Portfolio
          </div>
          <div className=" object-cover">
            <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px] py-20">
              <Image
                src="/assets/images/Group 503.png"
                alt=""
                width={2000}
                height={1713}
                className="absolute left-0 translate-y-10 scale-100 scale-x-150 object-cover"
              />
              <div className="relative text-gray-600">
                <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
                  account abstraction
                </p>
                <p className="max-w-md py-5 text-base font-normal">
                  <span className="font-bold">Non-Custodial Wallets: </span> Allows
                  users to access their accounts using familiar credentials, such
                  as email and password.
                </p>
                <p className="max-w-md text-base font-normal">
                  <span className="font-bold">Account Recovery: </span> users can
                  regain access by answering personalized security questions.
                </p>
              </div>
              <div className="relative translate-y-10">
                <Image
                  src="/assets/images/Content.png"
                  alt="content"
                  width={569}
                  height={377}
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px] pb-[7rem] pt-[8.9rem]">
            <Image
              src="/assets/images/Mask Group.png"
              alt=""
              width={1440}
              height={530}
              className="absolute left-0 w-full scale-x-150 object-cover "
            />
            <div className="translate-y-10">
              <Image
                src="/assets/images/Group 224.png"
                alt="content"
                width={569}
                height={377}
              />
            </div>
            <div className="relative text-gray-600">
              <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
                multi-signature vaults
              </p>
              <p className="max-w-md py-5 text-base font-normal">
                <span className="font-bold">User-Controlled Security:</span>
                Multi-signature vaults empower users with unprecedented control
                over the security of their digital assets
              </p>
              <p className="max-w-md text-base font-normal">
                <span className="font-bold">
                  Customizable Signature Requirements:
                </span>
                Users can choose the number of signatures required to authorize a
                transaction.
              </p>
            </div>
          </div>
          <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px]  ">
            <Image
              src="/assets/images/MaskGroup_2.png"
              alt=""
              width={1440}
              height={530}
              className="absolute right-0 w-full translate-y-[14.7rem] scale-150 object-cover pb-[3.5rem] "
            />

            <div className="relative text-gray-600">
              <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
                AI-DRIVEN INVESTMENT RECOMMENDATIONS
              </p>
              <p className="max-w-md py-5 text-base font-normal">
                <span className="font-bold">
                  Personalized Investment Strategies:
                </span>
                Analyzes user preferences, risk tolerance, and market trends to
                generate personalized investment strategies
              </p>
              <p className="max-w-md text-base font-normal">
                <span className="font-bold">Sentiment Analysis:</span>
                Incorporating sentiment analysis, the Al assesses social media,
                news articles, and other relevant data sources to gauge market
                sentiment.
              </p>
            </div>
            <div className="relative translate-y-10">
              <Image
                src="/assets/images/Content_1.png"
                alt="content"
                width={569}
                height={377}
              />
            </div>
          </div>
          <div className="relative mx-auto flex max-w-[90rem] items-center justify-between gap-20 px-[147px] pb-[7rem] pt-[8.9rem]">
            <Image
              src="/assets/images/MaskGroup_3.png"
              alt=""
              width={1440}
              height={530}
              className="absolute left-0 w-full scale-150 object-cover pb-[5rem] pt-[11rem]"
            />
            <div className="translate-y-10">
              <Image
                src="/assets/images/Content_2.png"
                alt="content"
                width={550}
                height={401}
                className="w-full"
              />
            </div>
            <div className="relative text-gray-600">
              <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
                AI-VERIFIED AUDIT FOR SMART CONTRACTS
              </p>
              <p className="max-w-md py-5 text-base font-normal">
                <span className="font-bold">Automated Auditing:</span>
                automates the auditing process using Al algorithms, allowing for
                efficient and thorough assessments of smart contract code
              </p>
              <p className="max-w-md text-base font-normal">
                <span className="font-bold">Continuous Monitoring:</span>
                Provides continuous monitoring, adapting to changes in the code
                and promptly identifying and addressing new vulnerabilities
              </p>
            </div>
          </div>
          <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px] pb-[7rem] pt-[8.9rem]">
            <Image
              src="/assets/images/Mask.png"
              alt=""
              width={1440}
              height={530}
              className="absolute left-0 w-full translate-y-[14.7rem] scale-150 object-cover pb-[7rem] pt-[23.8rem]"
            />

            <div className="relative text-gray-600">
              <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
                PREDICTIVE YIELD FARMING STRATEGIES
              </p>
              <p className="max-w-md py-5 text-base font-normal">
                <span className="font-bold">Dynamic Allocation Strategies:</span>
                Dynamically allocates assets across different liquidity pools
                based on changing market conditions
              </p>
              <p className="max-w-md text-base font-normal">
                <span className="font-bold">Risk Mitigation:</span>
                Embedded risk management algorithms assess the potential risks
                associated with different liquidity pools.
              </p>
            </div>
            <div className="translate-y-10">
              <Image
                src="/assets/images/Content_3.png"
                alt="content"
                width={569}
                height={377}
              />
            </div>
          </div>
        </section>
        <section className="font-primary">
          <div className="relative text-center text-[50px] font-bold leading-[65px]">
            Feature
          </div>
          <div className="mx-auto flex max-w-[90rem] gap-[10rem] items-center py-16">
            <Image src="/assets/images/feature_1.png" alt="" width={570} height={700} />
            <div>
              <p className="py-10 text-4xl font-bold leading-[47px] text-blue-600">Investors</p>
              <div>
                <div className="flex gap-5 py-3">
                  <Image src="/assets/images/icon_feature_4.png" alt="" width={110} height={113} />
                  <div className="text-3xl font-semibold text-gray-800">
                    Simplified Management
                    <p className="text-base font-normal text-gray-600">
                      Easily allocate, monitor, and adjust asset distributions across various vaults, all within a user-friendly platform.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 py-3">
                  <Image src="/assets/images/icon_feature_5.png" alt="" width={110} height={113} />
                  <div className="text-3xl font-semibold text-gray-800">
                    Community Insights
                    <p className="text-base font-normal text-gray-600">
                      Engage with a vibrant community of DeFi investors, sharing knowledge and strategies for maximizing portfolio security and growth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 py-3">
                  <Image src="/assets/images/icon_feature_6.png" alt="" width={110} height={113} />
                  <div className="text-3xl font-semibold text-gray-800">
                    Smart routing system
                    <p className="text-base font-normal text-gray-600">
                      Stay informed with real-time insights into your portfolios performance, enabling swift and informed decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[90rem] gap-[10rem] items-center py-[72px]">
            <div>
              <p className="py-10 text-4xl font-bold leading-[47px] text-blue-600">Funding managers</p>
              <div>
                <div className="flex gap-5 py-3">
                  <Image src="/assets/images/icon_feature_1.png" alt="" width={110} height={113} />
                  <div className="text-3xl font-semibold text-gray-800">
                    Strategic Deployment
                    <p className="text-base font-normal text-gray-600">
                      Optimize capital deployment with a range of vault options, each offering distinct security strategies for diversified funding avenues.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 py-3">
                  <Image src="/assets/images/icon_feature_2.png" alt="" width={110} height={113} />
                  <div className="text-3xl font-semibold text-gray-800">
                    Risk Assessment Tools
                    <p className="text-base font-normal text-gray-600">
                      Access advanced risk assessment tools to evaluate and mitigate potential vulnerabilities, ensuring a secure funding environment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 py-3">
                  <Image src="/assets/images/icon_feature_3.png" alt="" width={110} height={113} />
                  <div className="text-3xl font-semibold text-gray-800">
                    Collaborative Network
                    <p className="text-base font-normal text-gray-600">
                      Engage within a network of funding managers, leveraging collective insights and strategies to maximize fund security and growth potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image src="/assets/images/feature_2.png" alt="" width={570} height={700} />
          </div>
          <div className="py-[4rem] max-h-[55rem] justify-center flex w-full">
            <div className="absolute start-[13rem]">
              <div className="relative text-[50px] font-bold leading-[65px] py-6">
                Investment in easy mode <br></br>
                in just 3 steps
              </div>
              <button className="rounded-[10px] bg-blue-600 px-12 py-4 text-base font-medium text-white">
                Get Started
              </button>
            </div>
            <div className="px-40 justify-center py-20">
              <Image src="/assets/images/Vector 335.png" alt="" width={1200} height={0} />
              <div className="relative px-44 bottom-[100px]">
                <div className="bg-slate-50 w-16 flex justify-center border-white rounded-xl px-5 py-5">
                  <div className="bg-gray-400 rounded-full w-4 p-3"></div>
                </div>
                <div className="py-3 break-words">
                  <div className="absolute font-semibold h-52 text-[204px] opacity-10 text-gray-800 px-44 bottom-28 ">1</div>
                  <div className="text-3xl font-semibold text-gray-800 py-4">
                    Invest ...
                  </div>
                  <p className="max-w-72">
                    Pick the right token for your portfolio
                    Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
                  </p>

                </div>
              </div>
              <div className="relative px-[42rem] bottom-[31.5rem]">
                <div className="bg-slate-50 w-16 flex justify-center border-white rounded-xl px-5 py-5">
                  <div className="bg-gray-400 rounded-full w-4 p-3"></div>
                </div>
                <div className="py-3 break-words">
                  <div className="absolute font-semibold h-52 text-[204px] opacity-10 text-gray-800 px-[11rem] bottom-[9rem] ">2</div>
                  <div className="text-3xl font-semibold text-gray-800 py-4">
                    Rebalance ...
                  </div>
                  <p className="max-w-72">
                    Rebalance to minimize risks, maximize returns. Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
                  </p>
                </div>
              </div>
              <div className="relative start-[67rem] bottom-[67.5rem] max-w-xl">
                <div className="bg-slate-50 w-16 flex justify-center border-white rounded-xl px-5 py-5">
                  <div className="bg-gray-400 rounded-full w-4 p-3"></div>
                </div>
                <div className="py-3 break-words">
                  <div className="absolute font-semibold h-52 text-[204px] opacity-10 text-gray-800 px-[10rem] bottom-[6rem] ">3</div>
                  <div className="text-3xl font-semibold text-gray-800 py-4">
                    Monitor ....
                  </div>
                  <p className="max-w-72">
                    Invest & life balance. <br></br>
                    Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="font-primary max-w-screen-xl mx-auto h-[70rem]">
          <div>
            <div className="relative text-center text-[50px] font-bold leading-[65px] ">
              Timeline
            </div>
            <div className="object-cover h-full">
              <div className="flex justify-center py-56">
                <Image className="scale-125" src="/assets/images/MaskGroup_timeline_1.png" alt="" width={1000} height={800} />
              </div>
              <div className="tl bottom-[60rem]">
                <div className="tl-container tl-oval1 tl-left">
                  <div className="relative rounded-2xl px-7 py-7 bg-blue-50">
                    <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">Tittle Sample </div>

                    <div className="flex items-baseline gap-x-5 px-1 py-4">
                      <svg className="w-[40px]" width="10" height="11" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse id="Ellipse 5" cx="4.0359" cy="4.73523" rx="3.55592" ry="4.15515" fill="#4B5563" />
                      </svg>
                      <div className="text-base font-normal leading-[33.24px] text-gray-600">
                        Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.
                      </div>
                    </div>

                  </div>
                </div>
                <div className=" tl-container tl-right">
                  <div className="relative rounded-2xl px-7 py-7 bg-blue-50">
                    <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">Tittle Sample </div>

                    <div className="flex items-baseline gap-x-5 px-1 py-4">
                      <svg className="w-[30px]" width="10" height="11" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse id="Ellipse 5" cx="4.0359" cy="4.73523" rx="3.55592" ry="4.15515" fill="#4B5563" />
                      </svg>
                      <div className="text-base font-normal leading-[33.24px] text-gray-600">
                        Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
                      </div>
                    </div>

                  </div>
                </div>
                <div className="tl-container tl-left">
                  <div className="relative rounded-2xl px-7 py-7 bg-blue-50">
                    <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">Tittle Sample </div>

                    <div className="flex items-baseline gap-x-5 px-1 py-4">
                      <svg className="w-[30px]" width="10" height="11" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse id="Ellipse 5" cx="4.0359" cy="4.73523" rx="3.55592" ry="4.15515" fill="#4B5563" />
                      </svg>
                      <div className="text-base font-normal leading-[33.24px] text-gray-600">
                        Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
                      </div>
                    </div>

                  </div>
                </div>
                <div className="tl-container tl-right">
                  <div className="relative rounded-2xl px-7 py-7 bg-blue-50">
                    <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">Tittle Sample </div>
                    <div className="flex items-baseline gap-x-5 px-1 py-4">
                      <svg className="w-[30px]" width="10" height="11" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse id="Ellipse 5" cx="4.0359" cy="4.73523" rx="3.55592" ry="4.15515" fill="#4B5563" />
                      </svg>
                      <div className="text-base font-normal leading-[33.24px] text-gray-600">
                        Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
                      </div>
                    </div>
                  </div>

                </div>
                <div className="tl-oval">
                </div>


              </div>
            </div>
          </div>
        </section>
        <section className="font-primary">
          <div className="bg-blue-50 font-primary">
            <div className="relative text-center text-[50px] font-bold leading-[65px] py-[70px]">
              Frequently Ask Questions
            </div>
            <div className="py-[70px] px-[140px] gap-24 items-center justify-center flex grid-cols-2 ">
              <div>
                <div>
                  <div className="flex flex-1 gap-5 px-10 max-w-[36rem] bg-white border-slate-50 rounded-lg ">
                    <button className="flex">
                      <div className="w-56 pt-[1.9rem]">
                        <Image src="/assets/images/icon_ask_1.png" alt="icon" width={30} height={1} />
                      </div>

                      <div className="py-5 text-lg leading-[23.40px] font-semibold">
                        What make DigiTrust different from others ?
                        <p className="text-gray-600 text-[16px] font-normal leading-[24.11px] pl-4 text-left">
                          On Nansen, Debank, it shows how much you have and whats going on the market <br></br>
                          On Nimbus, we show how much you have and whats going on with your CURRENT INVESTMENT and then suggest you adjust it to reduce risk and maximize the return
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex flex-1 gap-5 px-5 max-w-xl bg-white border-slate-50 rounded-lg">
                    <button className="flex">
                      <div className="px-5 pt-[1.3rem]">
                        <Image src="/assets/images/icon_ask_2.png" alt="icon" width={30} height={1} />
                      </div>

                      <div className="py-5 text-lg leading-[23.40px] font-semibold ">
                        What is benefit of using DigiTrust ?
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex flex-1 gap-5 px-5 max-w-xl bg-white border-slate-50 rounded-lg ">
                    <button className="flex">
                      <div className="px-5 pt-[1.3rem]">
                        <Image src="/assets/images/icon_ask_2.png" alt="icon" width={30} height={1} />
                      </div>

                      <div className="py-5 text-lg leading-[23.40px] font-semibold ">
                        What is benefit of using DigiTrust ?
                      </div>
                    </button>
                  </div>
                </div>
                <div className="pt-[4.5rem]">
                  <div className="flex flex-1 gap-5 px-5 max-w-xl bg-white border-slate-50 rounded-lg ">
                    <button className="flex">
                      <div className="px-5 pt-[1.3rem]">
                        <Image src="/assets/images/icon_ask_2.png" alt="icon" width={30} height={1} />
                      </div>

                      <div className="py-5 text-lg leading-[23.40px] font-semibold ">
                        What is benefit of using DigiTrust ?
                      </div>
                    </button>
                  </div>
                </div>
                <div className="pt-6 w-[577px] h-[100px]">
                  <div className="flex flex-1 gap-5 px-5 max-w-xl bg-white border-slate-50 rounded-lg ">
                    <button className="flex">
                      <div className="px-5 pt-[1.3rem]">
                        <Image src="/assets/images/icon_ask_2.png" alt="icon" width={30} height={1} />
                      </div>

                      <div className="py-5 text-lg leading-[23.40px] font-semibold ">
                        What is benefit of using DigiTrust ?
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="font-primary">
          <div className="flex justify-center py-40 relative">
            <div className="px-96 ">
              <div className="absolute z-10 px-8 py-12 text-white">
                <div className="text-[50px] leading-[55px] font-bold ">
                  Get Started with DigiTrust Today!
                  <p className="text-xl leading-[30.10px] font-normal py-">
                    Subscribe to our newsletter to get early information and special calls.
                  </p>
                </div>
                <form className="py-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                    <input type="search" id="Enter your Email" className=" w-2/5 p-4 ps-10 text-sm text-gray-900 border rounded-[50px] focus:ring-blue-500 border-white bg-white " placeholder="Enter your Email" required />
                    <button type="submit" className="text-white start-[16.25rem] absolute bottom-2.5 bg-gray-800 focus:outline-none font-medium rounded-[50px] text-sm px-4 py-2 ">Start</button>
                  </div>
                </form>
              </div>
              <Image className="scale-125 z-0" src="/assets/images/Image_last.png" alt="content" width={1440} height={500} />
            </div>

          </div>
        </section>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </Layout>
    </div >
  );
}
