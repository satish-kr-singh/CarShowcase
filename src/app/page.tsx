import {Hero, CustomFilter, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero></Hero>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Car Catalogues</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper"></div>
              {allCars?.map((car) => {
                return <CarCard  car={car} />;
              })}
            </section>
          ) : (
            <div className="home__error-conainer">
              <h2 className="text-black text-x1 font-bold">No cars</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
