require('dotenv').config();
import mongoose from "mongoose";
import { User, IUserSchema } from "../../database";

describe("user model test", () => {

    let createdUser: IUserSchema;

    beforeAll(async () => {
        await mongoose.connect(String(process.env.MONGODB_URI))
            .catch((error: any) => {
                throw new Error(error?.message);
            })
    })

    afterAll(async () => {
        await User.deleteOne({ email: "testuser@example.com" });
        await mongoose.connection.close();
    })

    //Test 1: create new user

    it("Should create a new user", async () => {
        
        const userData: Partial<Omit<IUserSchema, "_id">> = {
            name: "testuser",
            email: "testuser@example.com",
            password: "testpassword"
        };

        createdUser = await User.create(userData);

        expect(createdUser.email).toBe(userData.email);
        expect(createdUser.name).toBe(userData.name);
    }, 10000);

    // Test 2: Ensure email is unique

    it("should fail to create a user with duplicate email", async () => {
        
        const userData: Partial<Omit<IUserSchema, "_id">> = {
            email: "test@example.com",
            name: "testuser",
            password: "testpassword",
        };

        try {
            await User.create(userData);
            expect(true).toBe(false);
        } catch (error: any) {
            expect(error.code).toBe(11000);
        }

    }, 10000);

    // Test 3: Get all users

    it("Should get all users", async () => {

        const allUsers = await User.find();
        
        const userWithoutTimestamps = {
            _id: createdUser._id,
            email: createdUser.email,
            name: createdUser.name
        };

        expect(allUsers).toContainEqual(
            expect.objectContaining(userWithoutTimestamps)
        );

    }, 20000);

    const removeMongoProps = (user: any) => {
        const { __v, _id, createdAt, updatedAt, ...cleanedUser } = user.toObject();
        return cleanedUser;
    };

    // Test 4: Get all users

    it("should get all users", async () => {

        const allUsers = await User.find();
        
        if (createdUser) {
            const cleanedCreatedUser = removeMongoProps(createdUser);

            expect(allUsers).toEqual(
                expect.arrayContaining([expect.objectContaining(cleanedCreatedUser)])
            );
        }
    
    }, 20000);

    // Test 5: Update an existing user

    it("should update an existing user", async () => {

        if (createdUser) {

            const updatedUserData: Partial<IUserSchema> = {
                name: "testuser",
                isAdmin: true,
            };

            const updatedUser = await User.findByIdAndUpdate(
                createdUser._id,
                updatedUserData,
                { new: true }
            );

            expect(updatedUser?.name).toBe(updatedUserData.name);
            expect(updatedUser?.isAdmin).toBe(updatedUserData.isAdmin);
        }
    }, 20000);

    // Test 6: Get user by ID

    it("should get user by ID", async () => {

        const retrievedUser = await User.findById(createdUser._id);

        expect(retrievedUser?.email).toBe(createdUser.email);
        expect(retrievedUser?.name).toBe(createdUser.name);

    }, 20000);

    // Test 7: Delete an existing user
   
    it("should delete an existing user", async () => {

        await User.findByIdAndDelete(createdUser._id);
        const deletedUser = await User.findById(createdUser._id);
        
        expect(deletedUser).toBeNull();

    }, 20000);

});