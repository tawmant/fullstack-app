import CreateButton from './CreateButton'

async function getMessages() {
  const data = await fetch('http://localhost:8000/messages', {
    cache: 'no-cache',
  })
  return data.json()
}

const Messages = async () => {
  const messages: any[] = await getMessages()

  return (
    <>
      {messages?.map((message: any) => (
        <div key={message.id} className="bg-amber-400 px-10 font-bold">
          {message.message}
        </div>
      ))}
      <CreateButton className="mt-5">create message</CreateButton>
    </>
  )
}

export default Messages
