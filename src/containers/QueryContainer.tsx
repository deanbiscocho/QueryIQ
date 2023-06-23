import React from "react";
import DashboardContainer from "./DashboardContainer";
import InputQuery from "../components/InputQuery";
import type { QueryLogItemObject } from "~/types/types";

interface QueryContainerProps {
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data: object; name: string }>>
  >;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  // setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
}

//Container is for input query and render the graphs on Dashboard Container if input query is processed successfully

const QueryContainer: React.FC<QueryContainerProps> = ({
  setQueryLog,
  setQuery,
  query,
  testConnected,
  setActiveQuery,
  activeQuery,
}) => {
  return (
    <div className="flex h-5/6 w-full flex-col justify-between md:h-full md:w-10/12">
      <div className="h-1/6 flex-none p-4">
        {/* Other content */}
        <div className="flex justify-center p-2">
          <InputQuery
            setQueryLog={setQueryLog}
            setQuery={setQuery}
            query={query}
            setActiveQuery={setActiveQuery}
          />
        </div>
      </div>
      <div className="flex-grow ">
        <DashboardContainer
          testConnected={testConnected}
          activeQuery={activeQuery}
        />
      </div>
    </div>
  );
};

export default QueryContainer;