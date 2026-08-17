import * as React from "react";
import { motion } from "framer-motion";
import { FileCheck, Package, Search, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { healthPackages, medicalTests, testCategories } from "@/data/tests";

export function PackagesSection() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredTests = React.useMemo(() => {
    return medicalTests.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || test.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section
      id="packages"
      className="relative py-20 lg:py-28 bg-background"
      aria-label="Packages section"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-teal/10 px-4 py-2 rounded-full mb-6">
            <Package className="w-4 h-4 text-accent-teal" />
            <span className="text-sm font-medium text-accent-teal">Health Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Health Packages
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive health packages designed for different age groups and health concerns.
            All packages include free home sample collection and digital reports.
          </p>
        </motion.div>

        {/* Packages Tabs */}
        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2 h-12 bg-muted/50 p-1 rounded-full">
            <TabsTrigger
              value="packages"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
            >
              <Package className="w-4 h-4" />
              Health Packages
            </TabsTrigger>
            <TabsTrigger
              value="tests"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
            >
              <FileCheck className="w-4 h-4" />
              Individual Tests
            </TabsTrigger>
          </TabsList>

          {/* Health Packages Tab */}
          <TabsContent value="packages" className="mt-0">
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {healthPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    variant={pkg.recommended ? "elevated" : "glass"}
                    hover
                    padding="lg"
                    className={cn(pkg.recommended ? "ring-2 ring-accent-teal relative" : "")}
                  >
                    {pkg.recommended && (
                      <Badge variant="success" size="sm" className="absolute -top-3 left-1/2 -translate-x-1/2">
                        Most Popular
                      </Badge>
                    )}

                    <h3 className="font-bold text-xl text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-accent-teal">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-lg text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                      <Badge variant="secondary" size="sm">
                        {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% off
                      </Badge>
                    </div>

                    {/* Tests Included */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        What's Included:
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.testsIncluded.slice(0, 5).map((test) => (
                          <li key={test} className="flex items-center gap-2 text-sm text-foreground">
                            <span className="w-4 h-4 text-accent-emerald">✓</span>
                            {test}
                          </li>
                        ))}
                        {pkg.testsIncluded.length > 5 && (
                          <li className="text-sm text-muted-foreground pl-6">
                            +{pkg.testsIncluded.length - 5} more tests
                          </li>
                        )}
                      </ul>
                    </div>

                    <Button
                      onClick={() => window.location.href = "/contact"}
                      className={cn("w-full h-12", pkg.recommended ? "bg-accent-teal text-white hover:bg-accent-teal/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80")}
                    >
                      Book Package
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Not sure which package is right for you? Contact us for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-accent-teal text-white hover:bg-accent-teal/90 h-14 px-8 text-base"
                  onClick={() => window.location.href = "/contact"}
                >
                  Book Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border bg-transparent hover:bg-accent-teal/10 hover:border-accent-teal hover:text-accent-teal h-14 px-8 text-base"
                  onClick={() => window.location.href = "/tests"}
                >
                  View Individual Tests
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          {/* Individual Tests Tab */}
          <TabsContent value="tests" className="mt-0">
            <TestCatalogTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// Separate component for test catalog to keep things organized
function TestCatalogTab() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredTests = React.useMemo(() => {
    return medicalTests.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || test.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* Search & Filters */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search tests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 px-4 pl-12 rounded-full border-2 border-border bg-background placeholder:text-muted-foreground focus:border-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal/20"
            aria-label="Search tests"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {testCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-accent-teal text-white shadow-sm"
                  : "bg-white text-foreground hover:bg-secondary"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tests Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {filteredTests.map((test, index) => (
          <TestCard key={test.id} test={test} index={index} />
        ))}
      </motion.div>

      {filteredTests.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-muted-foreground">No tests found matching your search.</p>
        </motion.div>
      )}
    </div>
  );
}

function TestCard({ test, index }: { test: typeof medicalTests[0]; index: number }) {
  const discount = test.originalPrice
    ? Math.round((1 - test.price / test.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card variant="glass" hover padding="md">
        <div className="flex items-start justify-between mb-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center",
            test.category === "blood" && "bg-accent-teal/10",
            test.category === "hormone" && "bg-accent-purple/10",
            test.category === "specialized" && "bg-accent-blue/10",
            test.category === "package" && "bg-accent-emerald/10"
          )}>
            {test.category === "blood" && <span className="text-xl">🩸</span>}
            {test.category === "hormone" && <span className="text-xl">🧬</span>}
            {test.category === "specialized" && <span className="text-xl">🔬</span>}
            {test.category === "package" && <span className="text-xl">📦</span>}
          </div>
          {test.popular && (
            <Badge variant="success" size="sm">Popular</Badge>
          )}
        </div>

        <h3 className="font-semibold text-foreground mb-1">{test.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{test.description}</p>

        {/* Parameters */}
        {test.parameters && test.parameters.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {test.parameters.slice(0, 3).map((param) => (
              <Badge key={param} variant="outline" size="sm" className="text-xs">
                {param}
              </Badge>
            ))}
            {test.parameters.length > 3 && (
              <Badge variant="outline" size="sm" className="text-xs">
                +{test.parameters.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {/* Price & Turnaround */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-foreground">₹{test.price.toLocaleString()}</span>
            {test.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{test.originalPrice.toLocaleString()}</span>
            )}
            {discount > 0 && (
              <Badge variant="success" size="sm">{discount}% off</Badge>
            )}
          </div>

          {test.homeCollection && (
            <Badge variant="info" size="sm" className="gap-1">
              <span className="w-3 h-3">🏠</span>
              Home Collection
            </Badge>
          )}

          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {test.turnaroundTime}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}