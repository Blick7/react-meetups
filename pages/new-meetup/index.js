import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const respronse = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      header: {
        'Content-Type': 'application/json',
      },
    });

    const data = await respronse.json();
    console.log(data);
    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetup;
