import { useQuery } from "@tanstack/react-query";
import { AllContestDataHome } from "../API/Contest";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import ContestData from "../Components/AllContest/ContestData";

const AllContest = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const [card, setCard] = useState([]);

  const { data = [], isLoading } = useQuery({
    queryKey: ["contest", "home"],
    queryFn: async () => {
      const data = await AllContestDataHome();
      console.log("contest home", data);
      return data;
    },
  });
  const business = data.filter((res) => res.type == "Business Contest");
  const medical = data.filter((res) => res.type == "Medical Contest");
  const article = data.filter((res) => res.type == "Article Writing");
  const gaming = data.filter((res) => res.type == "Gaming");
  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl mt-5 font-bold">All Contest!</h1>
      <Tabs
        className="text-center my-10"
        selectedIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index);
        }}
      >
        <TabList>
          <Tab>Business Contest</Tab>
          <Tab>Medical Contest</Tab>
          <Tab>Article Writing</Tab>
          <Tab>Gaming</Tab>
        </TabList>
        <TabPanel>
          <ContestData data={business} isLoading={isLoading} />
        </TabPanel>
        <TabPanel>
          <ContestData data={medical} isLoading={isLoading} />
        </TabPanel>
        <TabPanel>
          <ContestData data={article} isLoading={isLoading} />
        </TabPanel>
        <TabPanel>
          <ContestData data={gaming} isLoading={isLoading} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllContest;
