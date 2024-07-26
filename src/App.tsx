import './styles/global.css';

export function App() {
  const handleClick = () => {
    alert('Obrigado por clicar! 🚀');
  };

  return (
    <>  
      <h1 className='font-bold text-3xl text-blue-900 text-center'>Hello World</h1>

      <div className='flex items-center justify-center h-screen'>
        <button onClick={handleClick} className='bg-violet-600 font-medium px-4 py-2 rounded text-white hover:bg-violet-700'>
          Enviar
        </button>
      </div>
    </>
  );
}

