import testServer from "../test.server";
import request from "supertest";
import { User } from "../../database";

describe("User Routes", () => {

    beforeAll(async () => { });

    afterAll(async () => {

        await User.deleteOne({
            email: "testuser@example.com"
        });

        jest.clearAllMocks();
        testServer.close();
    });

    it("Should create a new user", async () => {

        const response = await request(testServer)
            .post("/api/auth/signup")
            .send({
                email: "testuser@example.com",
                password: "testpassword",
                name: "testuser"
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("success", true);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("email", "testuser@example.com");
        expect(response.body.data).toHaveProperty("name", "testuser");
        expect(response.body).toHaveProperty("message", "User created!");

    }, 20000);

    it("Should login a user and return a token", async () => {

        const testUser = {
            email: "testuser@example.com",
            password: "testpassword",
        };

        const response = await request(testServer)
            .post("/api/auth/login")
            .send({
                email: testUser.email,
                password: testUser.password,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("email", "testuser@example.com");
        expect(response.body.data).toHaveProperty("name", "testuser");
        expect(response.body).toHaveProperty("message", "User logged-in!");

        const cookies = response.header['set-cookie'];
        expect(cookies).toBeDefined();

        const authToken = extractTokenFromCookies(cookies, 'auth');
        expect(authToken).toBeDefined();

    }, 20000);

});

function extractTokenFromCookies(cookies: any, tokenName: string) {
    const tokenCookie = cookies.find((cookie: any) => cookie.includes(tokenName));
    if (!tokenCookie) {
        return null;
    }
    const tokenValue = tokenCookie.split(';')[0].split('=')[1];
    return tokenValue;
}