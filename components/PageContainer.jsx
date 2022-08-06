const PageContainer = ({children}) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {children}
    </div>
  );
}

export default PageContainer