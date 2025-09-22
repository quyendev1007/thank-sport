"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Star,
} from "lucide-react";

const salesData = [
  { day: "SAT", value: 38000 },
  { day: "SUN", value: 52000 },
  { day: "MON", value: 41000 },
  { day: "TUE", value: 48000 },
  { day: "WED", value: 44000 },
  { day: "THU", value: 29000 },
  { day: "FRI", value: 35000 },
];

const recentOrders = [
  {
    id: "ORD-001",
    method: "Credit Card",
    created: "2024-01-15",
    total: "$299.99",
    status: "Completed",
  },
  {
    id: "ORD-002",
    method: "PayPal",
    created: "2024-01-15",
    total: "$189.99",
    status: "Processing",
  },
  {
    id: "ORD-003",
    method: "Credit Card",
    created: "2024-01-14",
    total: "$449.99",
    status: "Shipped",
  },
  {
    id: "ORD-004",
    method: "Bank Transfer",
    created: "2024-01-14",
    total: "$329.99",
    status: "Pending",
  },
];

const topSellers = [
  { name: "Nike Mercurial", sold: 245, image: "/nike-football-boots.jpg" },
  { name: "Adidas Predator", sold: 198, image: "/adidas-football-boots.jpg" },
  { name: "Puma Future", sold: 167, image: "/puma-football-boots.jpg" },
];

const topVisitors = [
  { name: "John Doe", avatar: "/male-avatar.png" },
  { name: "Jane Smith", avatar: "/diverse-female-avatar.png" },
  { name: "Mike Johnson", avatar: "/male-avatar-2.png" },
];

function AdminDashboard() {
  const maxSales = Math.max(...salesData.map((d) => d.value));

  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Daily Visitors */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Daily Visitors
            </CardTitle>
            <Users className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,352</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+12.5%</span>
            </div>
          </CardContent>
        </Card>

        {/* Average Daily Sales */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Average Daily Sales
            </CardTitle>
            <DollarSign className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$51,352</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+12.5%</span>
            </div>
          </CardContent>
        </Card>

        {/* Order This Month */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Order This Month
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,352</div>
            <div className="flex items-center text-sm">
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-500">-2.2%</span>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Earnings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Monthly Earnings
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$20,360</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+2.2%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Top Visitors & Goals */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex -space-x-2">
                {topVisitors.map((visitor, index) => (
                  <Avatar key={index} className="border-2 border-white">
                    <AvatarImage src={visitor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {visitor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                  +2
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>1,500 to Goal</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>$25,000 to Goal</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2 [&>div]:bg-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {salesData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full bg-purple-600 rounded-t-sm transition-all duration-300 hover:bg-purple-700"
                    style={{
                      height: `${(data.value / maxSales) * 200}px`,
                      minHeight: "20px",
                    }}
                  />
                  <span className="text-xs text-gray-500 mt-2">{data.day}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-4">
              <span>0K</span>
              <span>10K</span>
              <span>20K</span>
              <span>30K</span>
              <span>40K</span>
              <span>50K</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                <div>METHOD</div>
                <div>CREATED</div>
                <div>TOTAL</div>
                <div>STATUS</div>
              </div>
              {recentOrders.map((order, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 text-sm items-center"
                >
                  <div>{order.method}</div>
                  <div>{order.created}</div>
                  <div className="font-medium">{order.total}</div>
                  <div>
                    <Badge
                      variant={
                        order.status === "Completed"
                          ? "default"
                          : order.status === "Processing"
                          ? "secondary"
                          : order.status === "Shipped"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Reviews & Top Seller */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= 4
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold">4.5/5</div>
                <div className="text-sm text-gray-500">
                  Total 650 customer review
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { stars: 5, percentage: 50 },
                  { stars: 4, percentage: 40 },
                  { stars: 3, percentage: 30 },
                  { stars: 2, percentage: 20 },
                  { stars: 1, percentage: 10 },
                ].map((rating) => (
                  <div
                    key={rating.stars}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <span className="w-6">{rating.stars} Star</span>
                    <Progress
                      value={rating.percentage}
                      className="flex-1 h-2"
                    />
                    <span className="w-8 text-right">{rating.percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Seller</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                  <div>Profile</div>
                  <div>Items sold</div>
                </div>
                {topSellers.map((seller, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 items-center"
                  >
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={seller.image || "/placeholder.svg"} />
                        <AvatarFallback>
                          {seller.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{seller.name}</span>
                    </div>
                    <div className="text-sm font-medium">{seller.sold}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
