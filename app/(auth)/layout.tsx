const AuthLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return (
        <main className="flex items-center justify-center h-full bg-[#111827]">
            {children}
        </main>
    );
}

export default AuthLayout;
