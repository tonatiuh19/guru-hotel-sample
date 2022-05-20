import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Head from "next/head";
import { Col, Row } from "react-bootstrap";
import CardInfo from "../components/Card/CardInfo";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import { useQuery } from "@apollo/client";
import Queries from "../apollo/Queries";
import { Businesses } from "../interfaces/Businesses.interface";
import Searcher from "../components/Searcher/Searcher";
import { Input } from "../interfaces/Input.interface";
import NoData from "../components/NoData/NoData";
import { useSelector } from "react-redux";
import isClosedBusinesses from "../utils/isClosedBusinesses";

const Home: NextPage = () => {
  const storeIds = useSelector((state: any) => state.business);
  const [businesses, setBusinesses] = useState<Businesses[] | null>([]);
  const [input, setInput] = useState<Input>({ term: "", location: "" });
  const [noData, setNoData] = useState(false);

  const toQuery: string | any = Queries("getBusinesses");
  const { loading, error, data } = useQuery(toQuery, {
    variables: input,
  });

  useEffect(() => {
    if (loading === false && data) {
      setNoData(false);
      setBusinesses(data.search.business);
    }

    if (data === undefined) {
      setNoData(true);
      setBusinesses([]);
    }
  }, [loading, data]);

  const handleSearchData = (term: string, location: string) => {
    setInput({ term: term, location: location });
  };

  return (
    <div>
      <Head>
        <title>Guru Hotel Sample</title>
        <meta name="description" content="Made with Love by @tonatiuh19" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>
        <Searcher handleSearchData={handleSearchData} />
        {loading ? (
          <Loading />
        ) : (
          <>
            {noData ? (
              <div className="container d-flex align-items-center justify-content-center">
                <NoData />
              </div>
            ) : (
              <Row xs={1} md={2} className="g-4 d-flex justify-content-center">
                {businesses?.map((item) => {
                  return (
                    <Col key={item.id}>
                      <CardInfo
                        id={item.id}
                        images={item.photos}
                        price={item.price}
                        is_closed={item.is_closed}
                        name={item.name}
                        location={`${item.location.address1}, ${item.location.city}, ${item.location.state}`}
                        rating_num={item.review_count}
                        rating={item.rating}
                        phone_number={item.display_phone}
                        isSeen={isClosedBusinesses(storeIds, item.id)}
                      />
                    </Col>
                  );
                })}
              </Row>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
