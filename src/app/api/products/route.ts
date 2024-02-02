import { NextRequest, NextResponse } from "next/server";
import { ProductService } from "../../../services/product.service";

export async function GET(request: NextRequest) {
    const productService = new ProductService();

    const urlSearchParams = request.nextUrl.searchParams;
    const search = urlSearchParams.get('search') as string;
    const category_id = urlSearchParams.get('category_id') as string;

    const products = await productService.getProducts({search, category_id});

    return NextResponse.json(products)
}