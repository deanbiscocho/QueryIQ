import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import QueryContainer from './QueryContainer';
import SideBarContainer from './SideBarContainer';
import DBModal from '~/components/modal/DBModal';
import type {
  QueryLogItemObject,
  FormData,
  GrafanaUserObject,
} from '~/types/types';

const MainContainer: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState(''); // inputQuery state
  const [queryLog, setQueryLog] = useState<QueryLogItemObject[]>([{
    query: 'byebye',
    data: [],
    name: '',
    dashboardUID: '',
  },{
    query: 'hello',
    data: [],
    name: '',
    dashboardUID: '',

  }]);
  const [connection, setConnection] = useState(false);

  const [grafanaUser, setGrafanaUser] = useState<GrafanaUserObject>({
    graf_name: '',
    graf_pass: '',
    graf_port: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    graf_name: '',
    graf_pass: '',
    graf_port: '',
    db_name: '',
    db_url: '',
    db_username: '',
    db_server: '',
    db_password: '',
  });
  const [dbUid, setdbUid] = useState('');

  const [dashboardState, setDashboardState] = useState('database'); // alt state is 'query'
  const [databaseGraphs, setDatabaseGraphs] = useState<string[]>([]);

  const [activeQuery, setActiveQuery] = useState<QueryLogItemObject>({
    query: '',
    data: [],
    name: '',
    dashboardUID: '',
  });

  //for connecting to the test DB
  const [testConnected, setTestConnected] = useState(false);

  //checking form validation on input changes for credentials
  useEffect(() => {
    const {
      graf_name,
      graf_pass,
      graf_port,
      db_name,
      db_url,
      db_username,
      db_server,
      db_password,
    } = formData;
    let isValid = false;
    if (
      graf_name &&
      graf_pass &&
      graf_port &&
      db_name &&
      db_url &&
      db_username &&
      db_server &&
      db_password
    ) {
      isValid = true;
    }
    setIsFormValid(isValid);
  }, [formData]);

  //when form is submitted, the function passed to useMutation is executed. It will receive the formData as an argument, which contains the data entered in the form fields. useMutation is used for making POST,PUT,DELETE
  const mutation = useMutation(async (formData: FormData) => {
    const apiUrl = 'http://localhost:3001/api/connect';
    const {
      graf_name,
      graf_pass,
      graf_port,
      db_name,
      db_url,
      db_username,
      db_server,
      db_password,
    } = formData;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(
          `${graf_name}:${graf_pass}`
        ).toString('base64')}`,
      },
      body: JSON.stringify({
        graf_name,
        graf_pass,
        graf_port,
        db_name,
        db_url,
        db_username,
        db_server,
        db_password,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to connect'); // Handle error
    }

    return response.json();
  });

  // will only fire if isFormValid === true
  const handleConnect = async () => {
    try {
      // mutation is an object returned by the useMutation hook and mutateAsync is a method provided by mutation object
      // await mutation.mutateAsync waits for the mutation operation to complete before moving to the next line
      const response = (await mutation.mutateAsync(formData)
      ) as void | {
        slug: string;
        uid: string;
        status: number;
        iFrames: string[];
      };
      // if response is NOT 200-299
      if (response.status <= 199 && response.status >= 300) {
        throw new Error('Failed to connect');
      }
      const { iFrames, datasourceuid } = response;
      setdbUid(datasourceuid);
      setDatabaseGraphs(iFrames);
      setDashboardState('database');
      setConnection(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // TO DO: want to move this conditional to the return statement and plug in our loading bar component
  //if post request is still loading
  if (mutation.isLoading) {
    return <div>Loading...</div>;
  }

  //if post request fails to fetch
  if (mutation.error) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // finds querylog object in array and updates the name property
  const editQueryLabel = (index: number, label: string): void => {
    setQueryLog((prevQueryLog) => {
      if (prevQueryLog.length > index) {
        const updatedQueryLog = [...prevQueryLog];
        updatedQueryLog[index].name = label; // functionality works but this linter is not being nice!
        return updatedQueryLog;
      }
      return prevQueryLog;
    });
  };

  const deleteQuery = async (index: number): Promise<void> => {
    
    const queryToDelete = queryLog[index];
    try {
      // make async call to backend to delete query specific dashboard
      // const response = await fetch()
      // if (response.)
      setQueryLog((prevQueryLog) => {
        if (prevQueryLog.length > index) {
          const updatedQueryLog = [...prevQueryLog];
          console.log(updatedQueryLog);
          updatedQueryLog.splice(index, 1);
          console.log(updatedQueryLog);
          return updatedQueryLog;
        }
      })
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-purple-900 to-white md:flex-row">
      {!isModalOpen ? (
        <></>
      ) : (
        <>
          <DBModal
            openModal={setIsModalOpen}
            setFormData={setFormData}
            formData={formData}
            isFormValid={isFormValid}
            handleConnect={handleConnect}
            setGrafanaUser={setGrafanaUser}
            grafanaUser={grafanaUser}
          />
        </>
      )}
      <SideBarContainer
        openModal={setIsModalOpen}
        connection={connection}
        setConnection={setConnection}
        setFormData={setFormData}
        formData={formData}
        queryLog={queryLog}
        setQueryLog={setQueryLog}
        editQueryLabel={editQueryLabel}
        deleteQuery={deleteQuery}
        testConnected={testConnected}
        setTestConnected={setTestConnected}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        setDashboardState={setDashboardState}
        databaseGraphs={databaseGraphs}
        setDatabaseGraphs={setDatabaseGraphs}
      />
      <QueryContainer
        setQueryLog={setQueryLog}
        setQuery={setQuery}
        query={query}
        testConnected={testConnected}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        dashboardState={dashboardState}
        setDashboardState={setDashboardState}
        databaseGraphs={databaseGraphs}
        connection={connection}
        grafanaUser={grafanaUser}
        dbUid={dbUid}
      />
    </div>
  );
};

export default MainContainer;
