function Summary() {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="lg:w-2/3 w-full bg-black bg-opacity-50 p-3 rounded-lg fade-in-top">
        <h1 className="font-bold text-xl text-center text-purple-300">
          About Me!
        </h1>
        <p>
          I&apos;m a software developer based in Ottawa and a current student at
          Algonquin College. I specialize in back-end development, but
          occasionally venture into in full-stack for fun. I like to code,
          create apps, and keep my wits sharp by learning new things. I love
          starting new projects—almost as much as I love leaving them
          unfinished. Right now, I&apos;m seeking opportunities in development
          or IT support, and I&apos;m open to both remote and on-site roles.
        </p>
      </div>
      <div className="lg:w-1/3 w-full bg-black rounded-lg bg-opacity-50 fade-in p-3">
        <img
          src="/images/about_profile.png"
          alt="Noah's profile picture"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Summary;
