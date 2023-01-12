export default function Home({ renderTime }: { renderTime: string }) {
  const currentTime = new Date().toString()
  return (
    <>
      <div style={{ fontFamily: 'monospace' }}>
        <h1>Hello!</h1>
        <p>Last rendered at -------------- {renderTime}</p>
        <p>It is currently --------------- {currentTime}</p>
      </div>
    </>
  )
}

export async function getStaticProps() {
  console.log('hello')
  return {
    props: {
      renderTime: new Date().toString()
    },
    revalidate: 10 // In seconds
  }
}
