import Carousel from '@/components/Carousel'

const Home = () => {
  return (
    <main className="w-full overflow-hidden flex justify-center items-center p-4 bg-slate-300 dark:bg-slate-950"
    style={{
      height: '100svh'
    }}>
      <Carousel />
    </main>
  )
}

export default Home
