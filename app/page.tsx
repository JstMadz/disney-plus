import Billboard from "../components/sections/billboard";
import Showcase from "../components/sections/showcase";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";
import api from "../library/api";
import shuffleMedias from "../helpers/shuffle-medias";
import Collection from "../components/sections/collection";

const Page = async () => {
  const spotlightMedia = await api.get.media.spotlight({ type: "all" });
  const popularMovies = await api.get.medias.group({
    name: "popular",
    type: "movies",
    page: 1,
  });
  const popularSeries = await api.get.medias.group({
    name: "popular",
    type: "series",
    page: 1,
  });
  // New to Disney+
  const nowPlayingMovies = await api.get.medias.group({
    name: "now-playing",
    type: "movies",
    page: 1,
  });
  const airingTodaySeries = await api.get.medias.group({
    name: "airing-today",
    type: "series",
    page: 1,
  });
  const newToDisneyPlusMedias = shuffleMedias([
    ...nowPlayingMovies,
    ...airingTodaySeries,
  ]);
  // Featured Marvel
  const ironManMedias = await api.get.medias.search({
    query: "iron man",
    page: 1,
  });
  const avengersMedias = await api.get.medias.search({
    query: "avengers",
    page: 1,
  });
  const spiderManMedias = await api.get.medias.search({
    query: "spider man",
    page: 1,
  });
  const featuredMarvelMedias = shuffleMedias([
    ...ironManMedias,
    ...avengersMedias,
    ...spiderManMedias,
  ]);
  const pixarMedias = await api.get.medias.search({
    query: "pixar",
    page: 1,
  });
  const disneyMedias = await api.get.medias.search({
    query: "disney",
    page: 1,
  });
  const starwarsMedias = await api.get.medias.search({
    query: "star wars",
    page: 1,
  });

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <div className="content bg-background-dark">
          <Franchise />
          <Collection.Portrait
            name="New to Disney+"
            medias={newToDisneyPlusMedias}
          />
          <Collection.Portrait
            name="Featured Marvel"
            medias={featuredMarvelMedias}
          />
          <Collection.Portrait name="Disney Originals" medias={disneyMedias} />
          <Collection.Portrait name="Popular Movies" medias={popularMovies} />
          <Collection.Portrait name="Popular Series" medias={popularSeries} />
          <Collection.Portrait
            name="Featured Starwars"
            medias={starwarsMedias}
          />
          <Collection.Portrait name="Best of Pixar" medias={pixarMedias} />
        </div>
      </Content>
    </>
  );
};

export default Page;
