import { Request, Response } from "express";
import signup from "../../handlers/controllers/auth/signup";
import login from "../../handlers/controllers/auth/login";
import * as authUsecases from "../../usecases/auth";
import * as dependencie from "../../config/dependencies";
import { IUserSchema } from "../../database";



jest.mock("../../handlers/controllers");

describe("User controller tests", () => {

    it("Should create a new user", async () => {

        const mockUserData = {
            name: "testuser",
            email: "testuser@example.com",
            password: "testpassword"
        }

        const mockCreatedUser = {
            _id: "mockUserId",
            ...mockUserData,
            isAdmin: false,
            isBlocked: false
        };

        (authUsecases.createUserUsecase(dependencie).interactor as jest.Mock)
            .mockResolvedValueOnce(mockCreatedUser);

        const mockRequest = {
            body: mockUserData
        } as Request;

        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as unknown as Response;

        const mockNext = jest.fn();

        await signup(dependencie)(mockRequest, mockResponse, mockNext);

        expect(authUsecases.createUserUsecase(dependencie).interactor)
            .toHaveBeenCalledWith(mockUserData);

        expect(mockResponse.status).toHaveBeenCalledWith(201);

        expect(mockResponse.json).toHaveBeenCalledWith({
            success: true,
            data: mockCreatedUser,
            message: "User created!"
        })

        expect(mockNext).not.toHaveBeenCalled();
    }, 20000);


    it("Should login a user and return a token", async () => {

        const mockUserCredentials = {
            email: "testuser@example.com",
            password: "testpassword",
        };

        const usecaseResponse: Partial<IUserSchema> = {
            _id: "mockUserId",
            email: mockUserCredentials.email,
            name: "testuser",
            isAdmin: false,
            isBlocked: false
        };

        (authUsecases.findByEmailUsecase(dependencie).interactor as jest.Mock).mockResolvedValueOnce(
            usecaseResponse
        );

        const mockRequest = {
            body: mockUserCredentials,
        } as Request;

        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;

        const mockNext = jest.fn();

        await login(dependencie)(mockRequest, mockResponse, mockNext);

        expect(authUsecases.findByEmailUsecase(dependencie).interactor)
            .toHaveBeenCalledWith(mockUserCredentials.email);

        expect(mockResponse.status).toHaveBeenCalledWith(200);

        expect(mockResponse.json).toHaveBeenCalledWith({
            success: true,
            data: usecaseResponse,
            message: "User logged-in!"
        });

    }, 20000);
})