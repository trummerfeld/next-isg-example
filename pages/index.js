import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link';
import Head from "next/head";

export default function Stats({ data }) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const statsDate = new Date(data.updated_at);
  const statsDateTimeHours = statsDate.getHours();
  const statsDateTimeMinutes = statsDate.getMinutes();
  const statsDateDay = statsDate.toLocaleDateString("en-US");
  const marketSpent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.stats.totalSpent);
  const marketTransactions = data.stats.totalCount.toLocaleString('en-US', { minimumFractionDigits: 0 });

  useEffect(() => {
    setIsMounted(true);
    }, []);
    const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <div className="container mx-auto max-w-3xl pt-4 pl-4 pr-4 pb-16">
      <Head>
      <meta name="description" content="Next.js Example using Incremental Static Generation."/>
        <title>Steam Market Stats ISG'ed</title>
      </Head>
      <nav>
        <ul className="flex items-center justify-between">
          <li className="flex items-center space-x-1">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="https://trummer.co.in">
              <a className="no-underline">trummer.co.in</a>
            </Link>
          </li>
          <li>
            <button
              className="hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md"
              onClick={switchTheme}
            >
              {theme === "light" || !isMounted ? (
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
              )}
            </button>
          </li>
        </ul>
      </nav>

      <h1 className="text-4xl pt-16">Steam Market Stats ISG'ed</h1>
      <div className="pb-16 text-xs">Berlin, 12/6/2020 - Lucas</div>
      <h2 className="text-xl pb-4 font-semibold">Steam Market Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
        <div className="flex space-x-2 p-4 rounded-md shadow-md max-w-md mx-auto min-w-full">
          <div className="h-6 w-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-base text-center">Spent by Users: {marketSpent}</p>
        </div>
        <div className="flex space-x-2 p-4 rounded-md shadow-md max-w-md mx-auto min-w-full">
          <div className="h-6 w-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <p className="text-base text-center">
            Transactions: {marketTransactions}
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-16 text-xs text-gray-300 dark:text-gray-700">
        Last updated: {statsDateDay} - {statsDateTimeHours}:
        {statsDateTimeMinutes < 10 ? "0" : ""}
        {statsDateTimeMinutes}
      </div>

      <h2 className="text-xl pb-4 font-semibold">Motivation</h2>
      <p className="text-base text-justify pb-8">
        I just recently had a talk with my colleagues on how what approach is
        the best for scaling loads of content sites and sites that have some
        sort of dynamic content. As Next.js has introduced{" "}
        <Link href="https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration">
          <a className="underline">Incremental Static Regeneration</a>
        </Link>{" "}
        with Version 9.5, I have argued that it is a good replacement for Static
        Site Generation. Without ever testing this feature, although the concept
        is known to me from the likes of Gatsby.
        <br></br>
        On top, I have read in a Slack Channel of our Frontend Development
        Profession, that they want to introduce TailwindCSS for our latest
        projects. Which inspired to check in more detail on both Incremental
        Static Generation (ISG) and Tailwind.
        <br></br>
        Those two discussions led my motivation to create this simple POC and
        get to know, if this approach of ISG could really fit into our
        projects.
      </p>

      <h2 className="text-xl pb-4 font-semibold">Setup</h2>
      <div className="pb-8">
        <p className="text-base text-justify">
          I have decided for a simple project, that fetches data from a remote
          API which sends me back data that is regularly updated. The setup I
          have used includes:
        </p>
        <ul className="list-disc list-inside pb-4">
          <li>Next.js</li>
          <li>TailwindCSS via create-next-app</li>
          <li>
            SteamApis.com (to have an API that I can use to crawl data on a
            regular basis)
          </li>
        </ul>

        <p className="text-base text-justify">
          So what's happening here? As already teased, I have created a simple
          page that uses ‚getStaticProps’, a data fetching method from Next that
          fetches the data at build time, rather than per request. The result of
          a build is a static file, like with any other traditional approach of
          rendering templates. This is currently also referenced as „Ahead of
          Time (AOT)“ serving of content. The opposite is called „Just in Time
          (JIT)“ and describes the method of Server-Side Rendering.<br></br>
          With Next 9.5, they have introduced Incremental Static Site
          generation. This rendering method uses ‚getStaticProps‘ too, but it
          lets you add an option to to re-build your page, called
          „revalidation“.</p>
          <blockquote>
            <p className="text-lg font-semibold pt-8 pl-4 pr-4">
              "Incremental Static Regeneration allows you to update existing
              pages by re-rendering them in the background as traffic comes in."
            </p>
          </blockquote>
          <figcaption className="flex justify-center pb-8 text-xs">
            Copied from the Next.js Documentation
          </figcaption>
          <p className="text-base text-justify">
          I have chosen to revalidate my page every 5 minutes, because the
          result of the API does not get changed too often. In general,
          revalidation lets you define the interval of in seconds.<br></br>
          The benefits of this method are the same as for static site
          generation, but with the added capability of newly added pages oder
          changed content being provided without rebuilding your whole app.
          Which results in an overall decrease of load on your node instances.
        </p>
      </div>

      <h2 className="text-xl pb-4 font-semibold">Roundup</h2>

      <ul className="list-disc list-inside pb-4">
        <li>
          The built-in Incremental Static Regeneration of Next.js can be a
          replacement for SSR and reduces the load on the Node.js nodes (which
          is an interesting fact for our Kubernetes deployments), although for
          highly dynamic pages with forms and requests it is a better idea to
          create a route that uses SSR instead.
        </li>
        <li>
          In my demo setup I included a Cloudfront Cache for testing purposes
          and it seems to be a valid option, to add that caching layer on top of
          the stack. Using such setup, seems to be the main benefit of this
          method (ISG).{" "}
          <Link href="https://vercel.com/docs/edge-network/overview">
            <a className="underline">Vercel</a>
          </Link>{" "}
          is doing this OOTB on their platform.
        </li>
        <li>
          Tailwind CSS is a nice and easy to use framework, that makes it easy
          to create sites fast and takes away the pain of writing reliable CSS
          through tested class-based styling. Especially the 'dark mode' feature
          was really easy to implement, I liked that a lot. Although I had my
          fair share of problems with flexbox 😃
        </li>
      </ul>

      <p>
        Feel free to visit the code this page and create an Issue or a Pull
        Request in case you want something to be changed:{" "}
        <Link href="https://github.com/trummerfeld/next-isg-example">
          <a className="underline">GitHub Repo</a>
        </Link>
      </p>
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch('https://api.steamapis.com/market/stats?api_key=' + process.env.API_KEY)
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 300,
  }
}