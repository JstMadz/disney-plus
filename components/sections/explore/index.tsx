import { use } from "react";
import api from "../../../library/api";
import Collection from "./collection";

const Explore = () => {
  const popularMovies = use(
    api.get.medias.group({ name: "popular", type: "movie", page: 1 })
  );
  const topRatedMovies = use(
    api.get.medias.group({ name: "top-rated", type: "movie", page: 2 })
  );
  const nowPlayingMovies = use(
    api.get.medias.group({ name: "now-playing", type: "movie", page: 3 })
  );
  const trendingToday = use(
    api.get.medias.trending({ type: "movie", time: "day" })
  );
  const trendingThisWeek = use(
    api.get.medias.trending({ type: "movie", time: "week" })
  );

  return (
    <section className="relative bg-background-dark pb-12 overflow-x-hidden">
      <div className="space-y-6 tablet:space-y-12">
        <Collection title="Trending Today" medias={trendingToday} />
        <Collection title="Trending This Week" medias={trendingThisWeek} />
        <Collection title="Now Playing" medias={nowPlayingMovies} />
        <Collection title="Popular" medias={popularMovies} />
        <Collection title="Top Rated" medias={topRatedMovies} />
      </div>
    </section>
  );
};

export default Explore;
