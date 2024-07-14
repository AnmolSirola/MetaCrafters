"use strict";
// Import Solana web3 functinalities
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
// Create a new keypair
var newPair = new web3_js_1.Keypair();
// Extract the public and private key from the keypair
var publicKey = newPair.publicKey.toString();
var privateKey = newPair.secretKey;
// Connect to the Devnet
var connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"), "confirmed");
console.log("Public Key of the generated keypair", publicKey);
// Get the wallet balance from a given private key
var getWalletBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
    var myWallet, walletBalance, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.log("Connection object is:", connection);
                return [4 /*yield*/, web3_js_1.Keypair.fromSecretKey(privateKey)];
            case 1:
                myWallet = _a.sent();
                return [4 /*yield*/, connection.getBalance(new web3_js_1.PublicKey(newPair.publicKey))];
            case 2:
                walletBalance = _a.sent();
                console.log("Wallet balance: ".concat(parseInt(walletBalance.toString()) / web3_js_1.LAMPORTS_PER_SOL, " SOL"));
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var airDropSol = function () { return __awaiter(void 0, void 0, void 0, function () {
    var myWallet, fromAirDropSignature, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, web3_js_1.Keypair.fromSecretKey(privateKey)];
            case 1:
                myWallet = _a.sent();
                // Request airdrop of 2 SOL to the wallet
                console.log("Airdropping some SOL to my wallet!");
                return [4 /*yield*/, connection.requestAirdrop(new web3_js_1.PublicKey(myWallet.publicKey), 2 * web3_js_1.LAMPORTS_PER_SOL)];
            case 2:
                fromAirDropSignature = _a.sent();
                return [4 /*yield*/, connection.confirmTransaction(fromAirDropSignature)];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                console.log(err_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Show the wallet balance before and after airdropping SOL
var mainFunction = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getWalletBalance()];
            case 1:
                _a.sent();
                return [4 /*yield*/, airDropSol()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getWalletBalance()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
mainFunction();
