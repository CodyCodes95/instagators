const PageContainer = ({children}) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default PageContainer