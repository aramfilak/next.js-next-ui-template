import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { ThemeSwitcher } from "../components/theme-switcher";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between p-4 border-b-2 border-primary-50 mb-2">
        <ThemeSwitcher />
      </header>
      <Card className="max-w-[20rem]">
        <CardHeader>
          <p>Welcome to Our Website</p>
        </CardHeader>
        <CardBody>
          <p>This is a simple landing page built with NextUI.</p>
          <Divider />
          <Button variant="solid" color="primary">
            Learn More
          </Button>
        </CardBody>
        <CardFooter>{new Date().getFullYear()} &copy; NextUI</CardFooter>
      </Card>
    </div>
  );
}
